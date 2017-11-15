let GenericDAO = function (entityObject) {

     let getAll = (req, res) =>{
        console.log('-----------------------> get all');
        console.log('-----------------------> query: ', req.query);
        // eager loading with all dependent objs
        if(req.query.eager){
            console.log('has eager',req.query.eager);
            let eager_fields = req.query.eager.split(',');
            delete req.query.eager;
            console.log(eager_fields);
            console.log('-----------------------> query: ', req.query);
            entityObject.find(req.query).populate(eager_fields).exec(function (err, objs) {
                if(err){
                    console.log(err);
                    res.status(500).send(err);
                }else{
                    res.status(200).send(objs);
                }
            });
        }else{
            entityObject.find(req.query, function (err, objs) {
                if(err){
                    console.log(err);
                    res.status(500).send(err);
                }else{
                    res.status(200).send(objs);
                }
            });
        }
    };

    let add = (req, res) => {
        console.log('-----------------------> add a obj', req.body);
        let obj = new entityObject(req.body);
        obj.save();
        console.log(obj);
        res.status(201).send(obj);
    };

    let getByIdUse = (req, res,  next) => {
        console.log('-----------------------> invoke middleware', req.params);
        let eager_fields='';
        if(req.query.eager) {
            console.log('has eager', req.query.eager);
            eager_fields = req.query.eager.split(',');
            delete req.query.eager;
            console.log(eager_fields);
            console.log('-----------------------> query: ', req.query);
        }
        entityObject.findById(req.params.id).populate(eager_fields).exec((err, obj)=>{
            if(err){
                console.log(err);
                res.status(500).send(err);
            }else if (obj){
                req.obj = obj;
                next();
            }else{
                res.status(404).send('no record found');
            }
        });
    };

    let getById = (req, res) => {
        console.log('-----------------------> get by id', req.params.id);
        res.json(req.obj);
    };

    let remove = (req, res) => {
        console.log('removing obj _id:',req.obj._id );
        req.obj.remove(err => { err ? res.status(500).send(err) : res.status(204).send("removed"); });
    };

    let update = (req, res) => {
        console.log('-----------------------> invoke update method', req.params.id);
        console.log('req.obj:', req.obj);
        if(req.body._id){
            console.log('deleting id from request id: ', req.body);
            delete req.body.id;
        }
        for(let param in req.body){
            if(req.body.hasOwnProperty(param)) {
                console.log('check hasOwnProperty', req.obj.hasOwnProperty(param), req.body.hasOwnProperty(param));
                req.obj[param] = req.body[param];
            }
        }
        req.obj.save((err) =>{
            console.log("inside error arrow method");
            console.log('type of obj: ', typeof req.obj, req.obj);
            console.log('type of req.body: ', typeof req.body, req.body);
            err ? res.status(500).send(err) : res.status(202).send(req.obj);
        });
    };

    return {
        get_all: getAll,
        add: add,
        get_by_id_use: getByIdUse,
        get_by_id: getById,
        update : update,
        remove: remove
    };
};
module.exports = GenericDAO;
