let express = require('express');
let router = express.Router();

let GenericRouter = (controller) =>{
    router.route('/')
        .post(controller.add)
        .get(controller.get_all);

    router.use('/:id', controller.get_by_id_use);

    router.route('/:id')
        .get(controller.get_by_id)
        .put(controller.update)
        .patch(controller.update)
        .delete(controller.remove);

    return router;
}

module.exports = GenericRouter;