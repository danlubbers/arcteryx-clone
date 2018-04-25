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
        dbInstance.products.getOneProduct(req.params.id).then(productID => res.status(200).send(productID)).catch((err)=>res.status(500).send(err))
    } 
}