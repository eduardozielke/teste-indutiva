const express = require('express')
const routes = express.Router()
const path = require('path')
const {uuid} = require('uuidv4')
const multer = require('multer')
const productController = require('../Controllers/productController')
const categoryController = require('../Controllers/categoryController')

const upload = multer({
  storage: multer.diskStorage({
    destination: path.join(__dirname, '../uploads'),
    filename: (req, file, callback) => callback(null, uuid() + path.extname(file.originalname))
  })
})


routes.post('/products', express.urlencoded({extended:true}), upload.array('photos'), productController.uploadProduct)
routes.get('/products', productController.listProducts)
routes.get('/products/:id', productController.getProduct)
routes.get('/products/find/:category', productController.getByCategory)
routes.delete('/products/:id', productController.deleteProduct)
routes.post('/products/:id', express.urlencoded({extended:true}), upload.array('photos'), productController.updateProduct)
routes.post('/categories', express.urlencoded({extended:true}), categoryController.addCategory)
routes.get('/categories', categoryController.getCategories)

module.exports = routes