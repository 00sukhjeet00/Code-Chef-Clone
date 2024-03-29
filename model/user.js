import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    country: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
})
export const User = mongoose.model('user', userSchema)