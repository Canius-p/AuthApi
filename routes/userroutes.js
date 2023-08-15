const loginController = require("../controller/loginController");
const router = require("express").Router();
router.post("/createuser", loginController.createUser);
module.exports = router;
