const Question = require('../database/model/queSchema');
const Option = require('../database/model/optSchema');


const createQuestion = async (req, res) => {

    const { title } = req.body;
    if (!title) {
        res.status(400)
    } else {
        const que = await Question.create({
            title: title,
        })
        res.status(200).send(que)
    }
}
const deleteQue = async (req, res) => {
    const queId = req.params.id;

    await Question.deleteMany({ _id: queId })
    const response = await Option.deleteMany({ queId: queId })
    res.status(200).send(response)
}

const createOption = async (req, res) => {
    const queId = req.params.id
    const { text } = req.body;
    if (!text) {
        res.status(400)
    } else {
        const option = await Option.create({
            text: text,
            queId: queId,
            votes: 0,
        })
        res.status(200).send(option)
    }
}

const fetchQuestions = async (req, res) => {
    const ques = await Question.find().populate('options')
    const options = await Option.find()
    ques.forEach((item) => {
        let res = options.filter((opt) => {
            if (opt.queId.equals(item._id)) {
                return opt
            }
        })
        item.options = res
    })
    res.status(200).send(ques)
}

module.exports = { createQuestion, fetchQuestions, createOption, deleteQue }