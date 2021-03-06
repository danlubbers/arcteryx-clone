require('dotenv').config();
const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      controller = require('./controller'),
      session = require('express-session'),
      Auth0Strategy = require('passport-auth0'),
      stripe = require('stripe')(process.env.S_STRIPE_KEY)
      passport = require('passport');
      cors = require('cors');



const app = express();

const {CONNECTION_STRING, SESSION_SECRET, DOMAIN, CLIENT_ID, CLIENT_SECRET, CALLBACK_URL, SERVER_PORT, S_STRIPE_KEY, REACT_APP_STRIPE_KEY} = process.env;


// This is for the NPM RUN BUILD
app.use(express.static(`${__dirname}/../build`));

app.use(bodyParser.json());
app.use(cors());

// Allows use of Sessions
app.use(session({
      secret: SESSION_SECRET,
      resave: false,
      saveUninitialized: true
}))

app.use(passport.initialize());
// Interact with sessions
app.use(passport.session());

// Set up Auth0
passport.use(new Auth0Strategy({
      domain: DOMAIN,
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: CALLBACK_URL,
      scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done) {
      // Where our database calls. 'profile' is where we access 'google's user information. 
      // Go to Heroku and create a database to connect too.
      // add CONNECTION_STRING to .env and copy/paste heroku/settings/URI
      const db = app.get('db')
      // This finds the user data in the find_user.sql file
      const {id, displayName} = profile;
      // The promise will always return an array
      // console.log(id)
      db.find_user([id]).then(users => {
            // console.log('user', users[0])
            if(users[0]) {
                  // console.log('user found', users[0].id)

                  return done(null, users[0].user_id)
            } else {
                  // create_user([must be in order to the sql file. auth_id = id and username = displayName]) this is in the db folder as create_user.sql
                  return db.create_user([id, displayName]).then(createUser => {
                        return done(null, createUser[0].user_id)
                  }).catch(console.log)
            }
      }).catch(console.log)
}
))

// Takes user profile data and directly inserts it to the session. serializeUser put information on the session
// Change 'profile' to 'id' and we are only putting the user id on the session instead of all the users infomation
passport.serializeUser((id, done) => {
      // console.log('DUDESSSSS')
      return done(null, id)
})

// In charge of running before any endpoint gets hit.
// Deserialize is for after a user logs in
passport.deserializeUser((id, done) => {
//    return done(null, id) - don't need this now
      // console.log('DUDE ')
      // find_session_user references the sql file of same name
      app.get('db').find_session_user([id]).then(user => {
            // Puts the user[0] object on req
            // console.log('ds', user[0])
            done(null, user[0]);
      }).catch((err)=>{
            console.error(err)
      })
})

// Add Login Endpoints here:
// test in browser: http://localhost:3500/auth
app.get('/auth', passport.authenticate('auth0'));

// This is where we want to redirect the user
app.get('/auth/callback', passport.authenticate('auth0', {
      // Add # since we are using HashRouter
      successRedirect:  process.env.SUCCESS_REDIRECT,
      failureRedirect:  process.env.FAILURE_REDIRECT
}))

// req.user comes from the serializeUser/deserializeUser user[0]
app.get('/auth/me', function(req, res) {
      if (req.user) {
            res.status(200).send(req.user)
      } else {
            res.status(401).send('Banned!!!')
      }
})

// This Endpoint kills the session
app.get('/logout', function(req, res) {
      req.logOut();
      // Redirects you back to the Homepage
      res.redirect(process.env.FAILURE_REDIRECT)
})


// Add Front-end Endpoints here:
// GET All COLD WEATHER Products to display on COLD WEATHER Page (componentDidMount)
app.get(`/api/getAllColdWeatherProducts`, controller.coldWeatherProducts);
// Get ONE COLD WEATHER Product when clicked to display on Product Page (componentDidMount)
app.get(`/api/getOneColdWeatherProduct/:id`, controller.coldWeatherProduct);
// GET ALL xFUNCATIONAL PRODUCTS
app.get(`/api/getAllxFunctionalProducts`, controller.xFunctionalProducts);
// GET ONE xFUNCATIONAL PRODUCT
app.get(`/api/getOnexFunctionalProduct/:id`, controller.xFunctionalProduct);
// Get ALL MidLayers
app.get(`/api/midLayers`, controller.midLayerProducts);
// Get One MidLayer Product
app.get(`/api/getOneMidLayerProduct/:id`, controller.midLayerProduct);
// Display Products that were added to the cart (componentDidMount)
app.get(`/api/productCart`, controller.cartProducts);
// POST endpoint for changing Quantity
app.put(`/api/cart`, controller.updateQuantity);
// Get ONE Product when clicked and add to the CART page
app.post(`/api/cart`, controller.addCart);
// Delete Product from Cart
app.delete(`/api/deleteProduct/:id`, controller.delete);

// <------ STRIPE PAYMENT -------> \\
app.post(`/api/payment`, controller.stripe); 


massive(CONNECTION_STRING).then(db=>{
      app.set('db', db);
      app.listen(SERVER_PORT, ()=>{console.log(`1984 is listening on PORT: ${SERVER_PORT}`)});
})