const replyController = require("../controllers/replyController")
const { tokenVerification } = require("../middlewares/authMiddleware")
const router = require("express").Router()


router.get("/:postId/bypost", replyController.getReplyByPost)
router.get("/:userId/byuser", replyController.getReplyByUserId)
router.post("/",replyController.createReply)
router.put("/addMoreVBT",  replyController.addMoreVBTToReply)
router.delete("/:replyId",  replyController.deleteReply)
module.exports = router;