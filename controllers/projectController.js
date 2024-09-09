const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    const { image, name, address, features, price, description } = req.body;
    try {
        const project = new Project({ image, name, address, features, price, description });
        await project.save();
        res.status(201).send({ project });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to create project" });
    }
};


exports.updateProject = async (req, res) => {
    const { image, name, address, features, price, description } = req.body;
    const { id } = req.params;
    try {
        const project = await Project.findByIdAndUpdate(id, { image, name, address, features, price, description }, { new: true });
        res.status(201).send({ project });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to update project" });
    }
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

