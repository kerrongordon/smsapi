import dotenv from 'dotenv'
dotenv.config()

export default {
    DbConnect: process.env.DB_CONNECT ?? '',
    Port: process.env.PORT ?? 3000,
    TokenSecret: process.env.TOKEN_SECRET ?? ''
}