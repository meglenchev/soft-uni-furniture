import { Router } from "express";
import userService from "../services/userService.js";

export const userController = Router();

userController.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const user = await userService.register(email, password);

    res.status(201).end();
});

userController.post('/login', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const result = await userService.login(email, password);
        res.status(201).json(result)
    } catch (err) {
        res.status(401).json({message: err.message});
    }
});

userController.get('/login', (req, res) => {
    res.end();
});