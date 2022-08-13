import { validation } from '../middleware/Validator.js';
import {Contest} from '../model/contest.js'
import { contest } from '../validator/contest.js';
export const getAll=async()=>{

}
export const createContest=async(req,res)=>{
    let payload=req.body;
    const result=validation(contest,payload)
    if(result.error){
        res.status(400).json({msg:result.error.details[0].message})
    }else{
        const newContest=await Contest.insertMany(result.value)
        res.status(200).json(newContest)
    }
}