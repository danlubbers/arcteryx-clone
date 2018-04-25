module.exports = {
    products: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAllProducts().then(products => res.status(200).send(products)).catch((err)=>res.status(500).send(err))
    },

    product: (req, res) => {
        console.log('woprd')
        const dbInstance = req.app.get('db');

        dbInstance.getOneProduct(req.params.id).then(productID => res.status(200).send(productID)).catch((err)=>res.status(500).send(err))
    } 
}