const Category = require('../Models/Category')

const addCategory = async (req, res) => {
    let {category} = req.body

    try {
        let newCategory = new Category({
            category: category.toLowerCase()
        })
        await newCategory.save().then(()=>{
            res.send('Categoria adiionada com sucesso!')
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

const getCategories = async (req, res) => {
    let categories = await Category.find()
    res.send(categories)
}

module.exports = {addCategory, getCategories}