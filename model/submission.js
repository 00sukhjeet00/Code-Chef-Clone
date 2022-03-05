const mongoose = require('mongoose')
const Schema = mongoose.Schema
const submissionModal = new Schema({
    date: { type: Date, required: true },
    username: { type: Schema.Types.ObjectId, ref='user' },
    result: { type: String },
    lang: { type: String, required: true },
    source: { type: String, required: true },
})
module.exports = Submission = mogoose.model('submission', submissionModal)