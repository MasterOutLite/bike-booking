const Router = require("express");
const router = new Router();
const bicycleRouter = require('./bicycleRouter');
const bicycleStatusRouter = require('./bicycleStatusRouter');

router.use('/bicycle', bicycleRouter);
router.use('/bicycleStatus', bicycleStatusRouter);

module.exports = router;
