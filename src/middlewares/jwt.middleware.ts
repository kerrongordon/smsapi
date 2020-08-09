import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import env from '../config/env.config'

const authJwt = (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send({ error: 'Access Denied' })

    try {
        jwt.verify(token, env.TokenSecret)
        next()
    } catch (error) {
        res.status(400).send({ error: 'Invalid Token' })
    }
}

export default authJwt