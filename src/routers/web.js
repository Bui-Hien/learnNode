const express = require("express");
const router = express.Router();

const {getHomepage,postCreateUser} = require("../controllers/homeController")
//router Method('/route', handler);
router.get('/', getHomepage);
router.post('/create-user', postCreateUser);

module.exports = router;