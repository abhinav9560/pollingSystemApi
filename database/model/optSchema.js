const mongoose = require("mongoose");

const option = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    },
    link_to_vote:{
        type:String,
        unique: true
    },
    queId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Question',
        required: true
    }
})
option.path('link_to_vote').validate((val) => {
    const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');
option.pre('save',function (next){
    this.link_to_vote = `http://localhost:3001/options/${this._id}/add_vote`;
    next()
})
module.exports = mongoose.model('Option', option);