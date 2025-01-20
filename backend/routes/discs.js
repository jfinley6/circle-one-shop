const express = require("express");
const router = express.Router();

const { getDiscs } = require('../controllers/discController')


router.route('/discs').get(getDiscs);

module.exports = router
