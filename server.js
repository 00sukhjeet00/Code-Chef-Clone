import express from 'express'   
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {userRoute}  from './route/user.js'
import  {contestRoute}  from './route/contest.js'
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2cqlb.mongodb.net/scifi?retryWrites=true&w=majority`)
    .then(res => {
        console.log("DB Connected")
    })
app.get('/status', (req, res) => {
    res.json({ status: "active" })
})
app.use('/api', userRoute)
app.use('/api',contestRoute)
const port = process.env.PORT || 5000
app.listen(port, () => { console.log('Server Started') })
