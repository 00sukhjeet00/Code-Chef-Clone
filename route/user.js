import  { Router } from 'express'
import {login,register} from '../controller/user.controller.js'
export const userRoute = Router()
userRoute.post('/login',login)
userRoute.post('/register',register)
