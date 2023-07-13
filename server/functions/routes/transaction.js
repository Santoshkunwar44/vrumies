const transactionController = require("../controllers/transactionController")
const { tokenVerification } = require("../middlewares/authMiddleware")

const router = require("express").Router()
router.get("/myorderpost/:userId", transactionController.myOrderPost)
router.post("/",  transactionController.addTransaction)
router.get("/inspect",  transactionController.getTransactionAsInpection)
router.put("/:transactionId",  transactionController.updateTransaction, transactionController.addRatingsToUsers, transactionController.settingTheAvgRating)
router.post("/buytokens", transactionController.buyTokens)
router.post("/disputes",  transactionController.createTransactionDispute)
module.exports = router  