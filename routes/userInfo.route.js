const { postUserInfo } = require('../controllers/userInfo.controller');

const router = require('express').Router();

router.route('/').post(postUserInfo);

module.exports = router;
