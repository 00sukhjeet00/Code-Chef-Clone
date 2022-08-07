import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {User} from '../model/user.js'
import validator from 'validator'

export const register = async(req,res) => {
    const { email, password, username, name,country } = req.body
    if (!email || !password || !username || !name)
    {
        return res.status(400).json({msg:"Please Enter all Field"})    
    }
    else {
        const validEmail = validator.isEmail(email)
        if (validEmail)
        {
            try {
                const hashedPassword=bcrypt.hashSync(password,10)
                const user = new User({ email,password:hashedPassword, name, username,country })
                user.save(err => {
                    if (err) throw err
                    return res.status(200).json({msg:"User Register Sussecfully"})
                })
            } catch (error) {
                console.log(error)
            }
        }
        else {
            return res.status(400).json({msg:"Please Enter Vaild Email"})
        }
    }
}
export const login = async (req,res) => {
    const { email, password } = req.body
    if (!email || !password)
    {
        return res.status(401).json({msg:"Please Enter all Field"})
    }
    else {
        try {
            User.findOne({ email }, (err, user) => {
                if (err) throw err
                if (!user)
                    return res.status(401).json({ msg: "Not Vaild Coder" })
                else {
                    if (!bcrypt.compareSync(password, user.password))
                        return res.status(401).json({ msg: "NOt Vaild Coder" })
                    else {
                        const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET)
                            return res.status(200).json({token})
                    }
                }
            })
        }
        catch (error) {
            console.log(error)
        }
    }
}