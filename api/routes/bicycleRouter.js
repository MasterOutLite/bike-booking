const Router = require('express');
const router = new Router();
const {check} = require('express-validator')

const controller = require('../controller/bicycle.controller');

router.post('/', [
        check('id', 'id not valid').isLength({min: 5}).notEmpty(),
        check('name', 'name not valid').isLength({min: 5}).notEmpty(),
        check('type', 'type not valid').isLength({min: 5}).notEmpty(),
        check('color', 'color not valid').isLength({min: 5}).notEmpty(),
        check('description', 'description not valid').isLength({min: 5}).notEmpty(),
        check('wheelSize', 'wheelSize not valid').isNumeric().notEmpty(),
        check('price', 'price not valid').isNumeric().notEmpty(),
    ],
    controller.create);
router.get('/', controller.getAll);
router.get('/statistics', controller.getStatistics);
router.put('/', [
    check('id', 'id not valid').isLength({min: 5}).notEmpty(),
    check('status', 'status not valid').isString().notEmpty(),
], controller.edit);

router.delete('/', [
    check('id', 'id not valid').isLength({min: 5}).notEmpty(),
], controller.delete);

module.exports = router;
