import querystring from "querystring";
import { Router } from "express";
import furnitureService from "../services/furnitureService.js";
import { getErrorMessage } from "../utils/errorUtils.js";

export const furnitureController = Router()

furnitureController.get('/', async (req, res) => {
    //const filter = new URLSearchParams(req.query?.where.replaceAll('"', ''));
    const query = req.query.where?.replaceAll('"', '');

    let filter = {};
    if (query) {
        filter = querystring.parse(query);
        console.log(filter._ownerId);
    }

    const furnitures = await furnitureService.getAll(filter);
    res.json(furnitures || []);
});

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;
    const ownerId = req.user.id;

    try {
        const furniture = await furnitureService.create(furnitureData, ownerId);
        res.status(201).json(furniture);
    } catch (err) {
        res.status(400).json({message: getErrorMessage(err)});
    }
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
        const updatedFurniture = await furnitureService.update(furnitureId, furnitureData, { runValidators: true });

        res.status(200).json(updatedFurniture);
    } catch (err) {
        res.status(304).json({ message: getErrorMessage(err) });
    }
})

furnitureController.delete('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;
    const userId = req.user.id;

    try {
        const furniture = await furnitureService.delete(furnitureId, userId);

        res.json(furniture);
    } catch (err) {
        res.status(304).json({ message: getErrorMessage(err) });
    }
})