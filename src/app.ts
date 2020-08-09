import express, { Application } from 'express'
import helmet from 'helmet'

import env from './config/env.config'
import connectDB from './config/db.config'
import controllers from './controllers/index.controller'


const app: Application = express()
connectDB()

app.use(helmet())
app.use(express.json())
app.use('/api/v1', controllers)

app.listen(env.Port, () => console.log(`App running on port ${env.Port}`))
