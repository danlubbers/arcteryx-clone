const stripe = require('stripe')(process.env.S_STRIPE_KEY)

module.exports = {
    coldWeatherProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        // References 'getAllProducts.sql file in (db) folder
        dbInstance.products.getAllColdWeatherProducts().then(products => res.status(200).send(products)).catch((err)=>{
            console.error(err);
            res.status(500).send(err)
        })
    },

    coldWeatherProduct: (req, res) => {
        // console.log('word')
        const dbInstance = req.app.get('db');
        // References 'getOneProduct.sql file in (db) folder
        // Must have (req.params.id) to get the id and pass it through
        dbInstance.products.getOneColdWeatherProduct(req.params.id).then(productID => res.status(200).send(productID)).catch((err)=>{
            console.error(err);
            res.status(500).send(err)
    })
    }, 

    xFunctionalProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        // References 'getAllxFunctinoalProducts.sql file in (db) folder
        dbInstance.products.getAllxFunctionalProducts().then(products => res.status(200).send(products)).catch((err)=>{
            console.error(err);
            res.status(500).send(err)
        })
    },

    xFunctionalProduct: (req, res) => {
        // console.log('word')
        const dbInstance = req.app.get('db');
        // References 'getOnexFunctionalProduct.sql file in (db) folder
        // Must have (req.params.id) to get the id and pass it through
        dbInstance.products.getOnexFunctionalProduct(req.params.id).then(productID => res.status(200).send(productID)).catch((err)=>{
            console.error(err);
            res.status(500).send(err)
    })
    },

    cartProducts: (req, res) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.cart.getAllCart(req.user.user_id).then(productID => res.status(200).send(productID)).catch((err)=>{
            console.error(err);
            res.status(500).send(err)
        })
    },

    updateQuantity: (req, res) => {
        const dbInstance = req.app.get('db')
        let {cartID, newQuantity} = req.body;
        // console.log('BODY', req.body)
        // changeQuantity is referencing the SQL file in database
        // cartID references cart_id $1, and newQuantity references quantity $2
        // UPdate the quantity, then....
        dbInstance.cart.changeQuantity(cartID, newQuantity).then(response=>{
            console.log(response)
            // Retrieve updated cart
            dbInstance.cart.getAllCart(req.user.user_id).then(cart=>{
            // and send it back
                res.status(200).send(cart)
            }).catch(err=>{
                console.error(err)
                res.status(500).send(err)
            })
        }).catch(err=>{
            console.error(err)
            res.status(500).send(err)
        })

    },

    addCart: (req, res) => {
        const dbInstance = req.app.get('db');
            // req.user.user_id because we are pulling off of Auth0
        // console.log(req.user.user_id,  'working')
        dbInstance.cart.addToCart(req.user.user_id, req.body.productID).then(cartID => res.status(200).send(cartID)).catch((err)=>{
            console.error(err);
            res.status(500).send(err)
        })
    },

    delete: (req, res) => {
        const dbInstance = req.app.get('db')
        console.log(req.params.id)
        dbInstance.cart.deleteProduct(req.params.id).then(product=>{
            res.status(200).send(product)
        })
    },

    stripe: (req, res) => {
        const dbInstance = req.app.get('db')
        // console.log(req.body.amount)
        const charge = stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            source: req.body.token.id,
            description: 'Example charge'
        })
        // console.log(req.user.user_id)
        dbInstance.cart.emptyCart(req.user.user_id).then(noProducts=>{
            res.status(200).send(noProducts) // clear out cart here
        }).catch(err=>{
            console.error(err)
            res.status(500).send(err)
        })
    }
}