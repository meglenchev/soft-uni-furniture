import { Router } from "express";

export const userController = Router();

userController.post('/register', (req, res) => {
    res.end();
});

userController.post('/login', (req, res) => {
    res.end();
});

userController.get('/login', (req, res) => {
    res.end();
});