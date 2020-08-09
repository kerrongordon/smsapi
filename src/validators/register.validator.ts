import joi from '@hapi/joi'
import { Request } from 'express'

const registerValidator = joi.object({
    name: joi.string().required().min(2).max(50).trim(),
    email: joi.string().required().email().max(255).trim(),
    password: joi.string().required().min(6).trim()
})

export const registerValid = (data: Request) => registerValidator.validate(data.body)
