const Staff = require("./../models/staff");

const getAllStaff = async (req, res) => {
    const allMembers = await Staff.find({});
    res.send(allMembers);
}

const createStaff = async (req, res) => {
    try {
        const newUser = new Staff(req.body);
        const savedUser = await newUser.save();
        res.send(savedUser);
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            // Send a custom error response to the client
            res.status(400).send('User with same fingerPrint exists already exists');
        } else {
            res.status(500).send('Error: ' + err.message);
        }
    }
}

const updateStaff = async (req, res) => {
    try {
        const updatedUser = await Staff.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true
        });
        res.send(updatedUser);
    } catch (err) {
        res.status(500).send('Error: ' + err.message);
    }
}

const deleteStaff = async (req, res) => {
    const deletedUser = await Staff.deleteOne({ _id: req.params.id });
    res.send(deletedUser);
}


module.exports = {
    deleteStaff,
    updateStaff,
    createStaff,
    getAllStaff
}