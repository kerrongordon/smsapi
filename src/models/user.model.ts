import mongoose, { Schema } from 'mongoose'
import { IUser } from '../interface/user.interface'

const userSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        min: 2,
        max: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 6
    }
}, { timestamps: true }
)

export default mongoose.model<IUser>('User', userSchema)