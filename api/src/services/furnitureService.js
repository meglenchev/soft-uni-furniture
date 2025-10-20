import { Furniture } from "../models/Furniture.js";

export default {
    create(furnitureData, ownerId) {
        return Furniture.create({
            ...furnitureData, 
            _ownerId: ownerId,
        });
    },
    getAll() {
        return Furniture.find().select({
            description: true,
            img: true,
            price: true
        });
    },
    getOne(furnitureId) {
        return Furniture.findById(furnitureId);
    }, 
    update(furnitureId, furnitureData) {
        return Furniture.findByIdAndUpdate(furnitureId, furnitureData);
    }, 
    delete(furnitureId) {
        return Furniture.findByIdAndDelete(furnitureId);
    }
}