const express = require('express');
const routes = express.Router();
const {createQuestion,fetchQuestions,createOption,deleteQue} = require('../controllers/createQue')


routes.get("/",fetchQuestions);
routes.post("/create",createQuestion);
routes.delete("/:id/delete",deleteQue)
routes.post("/:id/options/create",createOption);

module.exports = routes;