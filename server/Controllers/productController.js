const fs = require('fs');
const domain = require('domain').create();
const path = require('path')
const Product = require('../Models/Product')

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return Buffer.from(bitmap).toString('base64');
}

function imageWorking(arr) {
    return new Promise((resolve) => {

        fs.readdir(path.join(__dirname, '../uploads'), function (error, files){
            files.forEach(img => {
                let filePath  = path.join(__dirname, `../uploads/${img}`)
                let codeImg = base64_encode(filePath)
                let fullCodeImg = `data:image/png;base64, ${codeImg}`
                arr.push(fullCodeImg)
                fs.unlinkSync(filePath)
            })
            resolve()
        })

    })
}

const uploadProduct = async (req, res) => {
    let imagesArray = []
    let {productName, description, category} = req.body
    let priceRaw = parseFloat(req.body.price)
    let price = priceRaw.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    let workAround = imageWorking(imagesArray)

    domain.on("error", function(error){
        console.log(error);
    });

    workAround.then(()=>{
       let product = new Product({
           productName,
           description,
           category,
           price,
           photos: imagesArray
       })
   
       product.save().then(()=>{
        res.redirect('/')
       })
   }).catch(error => {
       console.log(error)
   })

}

const listProducts = async(req, res) => {
    const products = await Product.find()
    res.send(products)
}

const getProduct = async (req, res) => {
    let id = req.params.id

    try {
        let doc = await Product.findById(id)
        res.send(JSON.stringify(doc))
    } catch (error) {
        res.send(error)
    }
}

const deleteProduct = async (req, res) => {
    let id = req.params.id

    try {
        await Product.findByIdAndDelete(id)
        res.send('Produto deletado com sucesso!')
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const updateProduct = async (req, res) => {
    let id = req.params.id
    let updatedProduct = {}
    let imagesArray = []
    await imageWorking(imagesArray)
    updatedProduct.productName = req.body.productName
    updatedProduct.description = req.body.description
    updatedProduct.category = req.body.category
    let priceRaw = parseFloat(req.body.price)
    let price = priceRaw.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    updatedProduct.price = price
    
    if(imagesArray.length == 0) {
        updateProduct.photos = undefined
    } else {
        updatedProduct.photos = imagesArray
    }

    try {
        await Product.updateOne({_id: id}, updatedProduct)
        res.redirect('/')
    } catch (error) {
        res.send(error)            
    }
}

const getByCategory = async (req, res) => {
    let reqCategory = req.params.category

    try {
        let filteredProducts = await Product.find({category: reqCategory })
        res.send(filteredProducts)
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {uploadProduct, listProducts, getProduct, deleteProduct, updateProduct, getByCategory}