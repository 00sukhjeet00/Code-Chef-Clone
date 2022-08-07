import mongoose from 'mongoose'
const Schema = mongoose.Schema
const contestSchema = new Schema({
    name: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    questions:{type:Array,default:[]}
})
export const Contest = mongoose.model('contest', contestSchema)