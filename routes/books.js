// let express = require('express');
// let router = express.Router();
// let Book = require('../models/BookModel');
// let genericController = require('../controller/GenericController')(Book);
//
//     /* GET book json. */
// router.route('/')
//     .post(genericController.add)
//     .get(genericController.get_all);
//
// router.use('/:id', genericController.get_by_id_use);
//
// router.route('/:id')
//     .get(genericController.get_by_id)
//     .put(genericController.update)
//     .patch(genericController.update)
//     .delete(genericController.remove);
//
//
// module.exports = router;


// let Book = require('../models/BookModel');
// let controller = require('../controller/GenericController')(Book);

let express = require('express');
let router = express.Router();
let controller = require('../controller/BookController')();
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