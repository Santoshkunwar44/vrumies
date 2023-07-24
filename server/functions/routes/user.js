const userController = require("../controllers/userController")

const router = require("express").Router()

router.get("/loggedInUser", userController.loggedInUser)
router.get("/account/refresh", userController.refresh)
router.get("/myReferUsers/:code",userController.myReferUsers)
router.get('/search',userController.searchUser)
router.post("/login", userController.loginUser)
router.get("/all", userController.getUsers)
router.get("/:userId", userController.getUserById)
router.post("/action",userController.takeUserAction)
router.post("/", userController.addNewUser)
router.post("/referrer",userController.addMyReferrerCode);
router.put("/:userId", userController.updateUser)
router.delete("/:userId", userController.deleteUser)
router.post("/logout", userController.logout)


module.exports = router