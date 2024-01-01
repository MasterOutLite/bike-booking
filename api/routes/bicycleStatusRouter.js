const Router = require('express');
const router = new Router();
const {check} = require('express-validator');

const controller = require('../controller/bicycleStatus.controller');


router.get('/', controller.get);
router.post('/', controller.init);


module.exports = router;
