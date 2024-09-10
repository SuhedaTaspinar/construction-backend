const Service = require('../models/Service');

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
})

const upload = multer({storage: storage}).single("image");

exports.createService = (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
            res.status(500).send({error: "Failed to create project"});
        }
        const {type, description} = req.body;
        const image = req.file ? req.file.filename : null;
        try {
            const service = new Service({image, type, description});
            await service.save();
            res.status(201).send({service});
        } catch (err) {
            console.log(err);
            res.status(500).send({error: "Failed to create service"});
        }
    })
};


exports.updateService = async (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
            res.status(500).send({error: "Failed to create project"});
        }
        const {updates} = req.body;
        const {id} = req.params;
        if (req.file && req.file.filename) {
            updates.image = req.file.filename;
        }
        try {
            const service = await Service.findByIdAndUpdate(id, {updates}, {new: true});
            res.status(201).send({service});
        } catch (err) {
            console.log(err);
            res.status(500).send({error: "Failed to update service"});
        }
    })
};


exports.deleteService = async (req, res) => {
    const {id} = req.params;
    try {
        await Service.findByIdAndDelete(id);
        res.json({ message: 'Service deleted successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to delete service" });
    }
}


exports.getService = async (req, res) => {
    try{
        const service = await Service.find();
        res.status(200).json(service);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to get service" });
    }
}


exports.getServiceById = async (req, res) => {
    const {id} = req.params;
    try {
        const service  = await Service.findById(id);
        res.status(200).json(service);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to get service" });
    }
}

