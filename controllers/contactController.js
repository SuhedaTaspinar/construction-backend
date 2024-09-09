const Contact = require('../models/Contact');

exports.createContact = async (req, res) => {
    const { phone, mail, instagram, twitter, youtube, address } = req.body;
    try {
        const contact = new Contact({ phone, mail, instagram, twitter, youtube, address });
        await contact.save();
        res.status(201).send({ contact });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to create contact" });
    }
};


exports.updateContact = async (req, res) => {
    const { phone, mail, instagram, twitter, youtube, address } = req.body;
    const { id } = req.params;
    try {
        const contact = await Contact.findByIdAndUpdate(id, { phone, mail, instagram, twitter, youtube, address }, { new: true });
        res.status(201).send({ contact });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to update contact" });
    }
};


exports.deleteContact = async (req, res) => {
    const {id} = req.params;
    try {
        await Contact.findByIdAndDelete(id);
        res.json({ message: 'Contact deleted successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to delete contact" });
    }
}


exports.getContact = async (req, res) => {
    try{
        const contact = await Contact.find();
        res.status(200).json(contact);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to get contact" });
    }
}


exports.getContactById = async (req, res) => {
    const {id} = req.params;
    try {
        const contact  = await Contact.findById(id);
        res.status(200).json(contact);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({ error: "Failed to get contact" });
    }
}

