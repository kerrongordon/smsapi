import joi from '@hapi/joi'
import { Request } from 'express'

const loginValidator = joi.object({
    email: joi.string().required().email().max(255).trim(),
    password: joi.string().required().min(6).trim()
})

export const loginValid = (data: Request) => loginValidator.validate(data.body)
