const mongoose = require('mongoose')
const Schema = mongoose.Schema
const questionSchema = new Schema({
    name: { type: String, required: true },
    desc: { type: String, required: true },
    testCase: { type: String, required: true },
    hiddenTestCase: { type: String, required: true },
    timeLimit: { type: Number, required: true, min: 0.5, max: 5 },
    constraints: { type: String, requied: true },
    keyword: { type: String, required: true },
    author: { type: schema.Type.ObjectId, ref:'user' },
})
export const Question = mongoose.model('question', questionSchema)