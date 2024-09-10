const Project = require('../models/Project');

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

exports.createProject = (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
            return res.status(500).send({error: "Proje oluşturulamadı"});
        }

        const {name, address, features, price, description} = req.body;
        const image = req.file ? req.file.filename : null;
        try {
            const project = new Project({image, name, address, features, price, description});
            await project.save();
            res.status(201).send({project});
        } catch (err) {
            console.log(err);
            res.status(500).send({error: "Proje oluşturulamadı"});
        }
    });
};

exports.updateProject = async (req, res) => {
    upload(req, res, async function (err) {
        if (err) {
            return res.status(500).send({error: "Proje güncellenemedi"});
        }

        const {updates} = req.body;
        const {id} = req.params;

        if (req.file && req.file.filename) {
            updates.image = req.file.filename;
        }

        try {
            const project = await Project.findByIdAndUpdate(id, updates, {new: true});
            res.status(201).send({project});
        } catch (err) {
            console.log(err);
            res.status(500).send({error: "Proje güncellenemedi"});
        }
    });
};


exports.deleteProject = async (req, res) => {
    const {id} = req.params;
    try {
        await Project.findByIdAndDelete(id);
        res.json({ message: 'Project deleted successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to delete project" });
    }
}


exports.getProject = async (req, res) => {
    try{
        const projects = await Project.find();
        res.status(200).json(projects);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to get project" });
    }
}


exports.getProjectById = async (req, res) => {
    const {id} = req.params;
    try {
        const project  = await Project.findById(id);
        res.status(200).json(project );
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to get project" });
    }
}

