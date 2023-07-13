const postController = require("../controllers/postController")
const { tokenVerification } = require("../middlewares/authMiddleware")

const router = require("express").Router()

router.get("",postController.getPost)
router.get("/location", postController.getPostByLocation)
// router.get("/", postController.getAllPost)

router.delete("/:postId", postController.hidePost)
router.post("/",postController.addNewPost)
router.put("/:postId", postController.updatePost)
// router.get("/:userId/byUserId", postController.getPostByUserId)
router.post("/addMoreVBT/:id", postController.addMoreVBTtoPost)
router.post("/comment/:postId", postController.addComment)
module.exports = router