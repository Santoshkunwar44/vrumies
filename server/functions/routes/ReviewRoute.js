const reviewController = require("../controllers/reviewController");

const Router = require("express").Router()
Router.post("/",reviewController.addReview)
Router.get("/",reviewController.getUsersReview)

module.exports = Router;