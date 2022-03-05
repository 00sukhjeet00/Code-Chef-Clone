const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questionSchema = new Schema({
    name: { type: String, required: true },
    code: { type: String, required: true, maxlength: 6, minlength: 4, unique: true },
    desc: { type: String, required: true },
    testCase: { type: String, required: true },
    hiddenTestCase: { type: String, required: true },
    timeLimit: { type: Number, required: true, min: 0.5, max: 5 },
    constraints: { type: String, requied: true },
    keyword: { type: String, required: true },
    author: { type: schema.Type.ObjectId, ref='user' },
})
module.exports = Question = mongoose.model('question', questionSchema)