const express = require('express');
const { addVote,deleteOption } = require('../controllers/options');
const routes = express.Router();

routes.delete("/:id/delete",deleteOption)
routes.put("/:id/add_vote",addVote);

module.exports = routes;
