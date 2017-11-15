let Book = require('../models/BookModel');
let controller = require('./GenericController')(Book);

let Controller = () => {
    // if need more method
    let get_single_prop = (req, res) =>{
        console.log('single prop name and value: ',req.params.single_prop, req.obj[req.params.single_prop]);
        if (req.params.single_prop && req.obj[req.params.single_prop]) {
            let single_value = {};
            single_value[req.params.single_prop] = req.obj[req.params.single_prop];
            res.status(200).send(single_value);
        }else{
            res.status(500).send({"error": "property not found"});
        }

    };

    return {
        get_all: controller.get_all,
        add: controller.add,
        get_by_id_use: controller.get_by_id_use,
        get_by_id: controller.get_by_id,
        update : controller.update,
        remove: controller.remove,
        get_single_prop: get_single_prop
    };
};

module.exports = Controller;