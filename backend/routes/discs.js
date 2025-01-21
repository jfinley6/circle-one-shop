const express = require("express");
const router = express.Router();

const { newDisc, getDiscs } = require('../controllers/discController')


router.route('/discs').get(getDiscs);

router.route('/disc/new').post(newDisc);

module.exports = router
