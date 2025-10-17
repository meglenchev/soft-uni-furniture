import { Router } from "express";

export const furnitureController = Router()

furnitureController.get('/', (req, res) => {
    res.json([]);
});