const service = require('../service/bicycleStatus.service');

class BicycleStatusController {

    async init(req, res, next) {
        await service.init();
        return res.status(201).json({message: 'Ok', status: 201})
    }

    async get(req, res, next) {

        return res.json(await service.getAll());
    }
}

module.exports = new BicycleStatusController();
