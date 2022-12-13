const express = require('express');
const router = express.Router();
const {clearCacheAndHistory,openURL,closeBrowser} = require('../controllers/actions')


router.get('/clear',clearCacheAndHistory);
router.get('/open',openURL);
router.post('/close/:browser', closeBrowser);

module.exports = router;