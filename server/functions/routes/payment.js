const router = require("express").Router()
const PaymentController = require("../controllers/payment")
const { tokenVerification } = require("../middlewares/authMiddleware")
router.get("/config", PaymentController.getPusblishableKey)
router.post("/create-payment-intent", PaymentController.createPaymentIntent)



module.exports = router      
