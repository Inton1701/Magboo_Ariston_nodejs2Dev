const express = require('express');
const router = express.Router();
const animal =  require('../controller/animal');
router.get('/',animal.anim);
router.get('/dog', animal.dog);
router.get('/lion', animal.lion);
router.get('/cow', animal.cow);
router.get('/goat', animal.goat);
router.get('/cat', animal.cat);

module.exports = router;