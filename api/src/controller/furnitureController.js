import { Router } from "express";
import furnitureService from "../services/furnitureService.js";

export const furnitureController = Router()

furnitureController.get('/', async (req, res) => {
    const furnitures = await furnitureService.getAll();
    res.json(furnitures || []);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    const ownerId = req.user.id;

    const furniture = await furnitureService.create(furnitureData, ownerId);
    res.status(201).json(furniture);
})

furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getOne(furnitureId);

    res.status(200).json(furniture);
})

furnitureController.put('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const furnitureData = req.body;

    try {
        const updatedFurniture = await furnitureService.update(furnitureId, furnitureData, {runValidators: true});

        res.status(200).json(updatedFurniture);
    } catch (err) {
        res.status(304).json({message: err.message});
    }
})