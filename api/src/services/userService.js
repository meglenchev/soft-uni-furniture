import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export default {
    register(email, password) {
        return User.create({ email, password });
    },
    async login(email, password) {
        const user = await User.findOne({ email });

        if (!user) {
            throw new Error('Invalid user or password!');
        }

        const isValid = bcrypt.compare(password, user.password);

        if (!isValid) {
            throw new Error('Invalid user or password!');
        } 

        return user;
    },
}