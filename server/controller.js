module.exports = {
    read: (req, res) => {
        const dbInstance = req.app.get('db');

        dbInstance.getAllProducts().then(products => res.status(200).send(products)).catch((err)=>res.status(500).send(err))
    }
}