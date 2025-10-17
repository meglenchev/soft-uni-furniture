import { Schema, model, Types } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String, 
        required: [true, 'User Email is required!'],
    }, 
    password: {
        type: String, 
        required: [true, 'User Password is required!'],
    }
});

export const User = model('User', userSchema, 'users');