import { Request, Response, NextFunction } from 'express'
import { loginValid } from '../validators/login.validator'
import User from '../models/user.model'
import bcrypt from 'bcrypt'

const loginService = async (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = loginValid(req)
    if (error) return res.status(400).send({ error: error?.details[0].message })

    const user = await User.findOne({ email: value.email })
    if (!user) return res.status(400).send({ error: `Email Not Found` })

    const validPassword = await bcrypt.compare(value.password, user.password)
    if (!validPassword) return res.status(400).send({ error: `Invalid Password` })

    res.send(`Logged In`)
}



export default loginService