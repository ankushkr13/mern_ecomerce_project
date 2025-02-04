import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
    },
     mobile: {
        type: Number,
        required: true,
     },
    password: {
        type: String,
        required: true,
    },
    address: {
        type: {},
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
    role: {
        type: Number,
        default: 0
    }
},{timestamps:true}) // created time add when new users added

export default mongoose.model('users', userSchema)