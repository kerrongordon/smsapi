import { Request, Response, NextFunction } from 'express'
import { registerValid } from '../validators/register.validator'
import User from '../models/user.model'
import bcrypt from 'bcrypt'

const registerService = async (req: Request, res: Response, next: NextFunction) => {

    const { error, value } = registerValid(req)
    if (error) return res.status(400).send({ error: error?.details[0].message })

    const emailExist = await User.findOne({ email: value.email })
    if (emailExist) return res.status(400).send({ error: `Email ${value.email} already exists.` })


    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(value.password, salt)

    const user = new User({
        name: value.name,
        email: value.email,
        password: hashedPassword
    })

    try {
        const saveUser = await user.save()
        res.status(201).send({ id: saveUser._id, email: saveUser.email })
    } catch (error) {
        res.status(400).send(error)
    }
}

export default registerService