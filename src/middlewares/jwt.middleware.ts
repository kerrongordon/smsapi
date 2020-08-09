import { Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import env from '../config/env.config'
import { IGetUserAuthInfoRequest } from '../utilities/request.util'

const authJwt = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send({ error: 'Access Denied' })

    try {
        const verified = jwt.verify(token, env.TokenSecret)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).send({ error: 'Invalid Token' })
    }
}

export default authJwt