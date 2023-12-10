const Options = require('../database/model/optSchema');



const addVote = async (req, res) => {
    const optID = req.params.id
    const { vote } = req.body;
    if (!vote) {
        res.status(400)
    } else {
        const update = { votes: vote };
        const response = await Options.findByIdAndUpdate(optID, update)
        res.status(200).send(response)
    }
}
const deleteOption = async (req,res) => {
    const optID = req.params.id;

    const response = await Options.findByIdAndDelete(optID)
    res.status(200).send(response)
}

module.exports = { addVote, deleteOption }