const Service = require('../models/Service');

exports.createService = async (req, res) => {
    const { image, type, description } = req.body;
    try {
        const service = new Service({ image, type, description });
        await service.save();
        res.status(201).send({ service });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to create service" });
    }
};


exports.updateService = async (req, res) => {
    const { image, type, description } = req.body;
    const { id } = req.params;
    try {
        const service = await Service.findByIdAndUpdate(id, { image, type, description }, { new: true });
        res.status(201).send({ service });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to update service" });
    }
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

