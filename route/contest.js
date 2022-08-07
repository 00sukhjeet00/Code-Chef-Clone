import {Router} from 'express'
import { createContest } from '../controller/contest.js'
import { isAdmin } from '../middleware/isAuthenticated.js';
export const contestRoute=Router();
contestRoute.get('/contest')
contestRoute.post('/contest',isAdmin,createContest)
contestRoute.get('/contest/:id')