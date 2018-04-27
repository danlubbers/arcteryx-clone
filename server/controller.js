module.exports = {
    products: (req, res) => {
        const dbInstance = req.app.get('db');
        // References 'getAllProducts.sql file in (db) folder
        dbInstance.products.getAllProducts().then(products => res.status(200).send(products)).catch((err)=>{
            console.error(err);
            res.status(500).send(err)
        })
    },

    product: (req, res) => {
        // console.log('word')
        const dbInstance = req.app.get('db');
        // References 'getOneProduct.sql file in (db) folder
        // Must have (req.params.id) to get the id and pass it through
        dbInstance.products.getOneProduct(req.params.id).then(productID => res.status(200).send(productID)).catch((err)=>{
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
    }
    
}