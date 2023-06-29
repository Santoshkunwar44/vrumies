const categories = require("../controllers/categories")

const router = require("express").Router()

router.get("/", categories.getAllCategory)
router.post("/", categories.addNewCateogry)
router.put("/",categories.updateCategory)





module.exports = router