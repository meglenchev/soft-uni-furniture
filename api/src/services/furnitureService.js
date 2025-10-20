import { Furniture } from "../models/Furniture.js";

export default {
    create(furnitureData, ownerId) {
        return Furniture.create({
            ...furnitureData, 
            _ownerId: ownerId,
        });
    },
    getAll(filter) {
        return Furniture.find(filter).select({
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
    delete(furnitureId, userId) {
        //return Furniture.findByIdAndDelete(furnitureId);
        return Furniture.deleteOne({ _id: furnitureId, _ownerId: userId })
    }
}