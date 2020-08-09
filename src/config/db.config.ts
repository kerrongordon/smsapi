import mongoose from 'mongoose'
import env from './env.config'

const connectDB = () =>
    mongoose.connect(
        env.DbConnect,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        },
        () => console.log('Connected to Database')
    )


export default connectDB