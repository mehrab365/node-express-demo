let controller = require('../controller/PackController')();
// let router = require('./GenericRouter')(controller);
let express = require('express');
let router = express.Router();


router.route('/')
    .post(controller.add)
    .get(controller.get_all);

router.use('/:id', controller.get_by_id_use);

router.route('/:id')
    .get(controller.get_by_id)
    .put(controller.update)
    .patch(controller.update)
    .delete(controller.remove);
// place for add more router
router.route('/:id/:single_prop')
    .get(controller.get_single_prop);

module.exports = router;