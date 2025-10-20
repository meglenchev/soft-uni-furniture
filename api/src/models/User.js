import { Schema, model, Types } from "mongoose";
import  bcrypt from "bcrypt";

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

userSchema.pre('save', async function() {
    this.password = await bcrypt.hash(this.password, 10);
})

export const User = model('User', userSchema, 'users');