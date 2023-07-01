const category = require("../model/category")

class categoryController {


    async addNewCateogry(req, res) {



        try {
            const savedCategory = await category.create(req.body)

            res.status(200).json({ message: savedCategory, success: true })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error, success: false })
        }
    }

    async getAllCategory(req, res) {

        // const {_} = req.query;
        console.log("the query",req.query)

        try {
            const categoryList = await category.find({
                ...req.query
            })
            return res.status(200).json({ message: categoryList, success: true })

        } catch (error) {
            console.log(error)
            return res.status(500).json({ message: error, success: false })
        }


    }

    async updateCategory(req,res){
        try {
                await category.updateMany({},{type:"post"});
                res.status(200).json({message:"updated"})
        } catch (error) {
                res.status(500).json({message:error})
        }
    }


}
module.exports = new categoryController()

