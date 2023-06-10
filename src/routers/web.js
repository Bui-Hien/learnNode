const express = require("express");
const router = express.Router();

const {getHomepage, displayUser,postCreateUser } = require("../controllers/homeController");

router.get('/', getHomepage);
router.post('/create-user', postCreateUser);
router.get('/display-user', displayUser);

module.exports = router;
