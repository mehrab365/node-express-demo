var Pack = require('../models/PackModel');
var pack_controller = require('./GenericController')(Pack);

let PackController = () => {
    // if need more method
    let get_single_prop = (req, res) =>{
        console.log('single prop name and value: ',req.params.single_prop, req.obj[req.params.single_prop]);
        if (req.params.single_prop && req.obj[req.params.single_prop]) {
            let single_value = {};
            single_value[req.params.single_prop] = req.obj[req.params.single_prop];
            res.status(200).send(single_value);
        }else{
            res.status(500).send({"error": "image url not found"});
        }

    };
    return {
        get_all: pack_controller.get_all,
        add: pack_controller.add,
        get_by_id_use: pack_controller.get_by_id_use,
        get_by_id: pack_controller.get_by_id,
        update : pack_controller.update,
        remove: pack_controller.remove,
        get_single_prop: get_single_prop
    };
}

module.exports = PackController;