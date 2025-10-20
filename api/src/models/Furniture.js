import { Schema, model } from "mongoose";

const furnitureSchema = new Schema({
    make: {
        type: String, 
        required: [true, 'Make is required!'],
        minLength: [4, 'Make should be at least 4 characters long!']
    },
    model: {
        type: String, 
        required: [true, 'Model is required!'],
        minLength: [4, 'Model should be at least 4 characters long!']
    },
    year: {
        type: Number, 
        required: [true, 'Year is required!'],
        min: [1950, 'Year year cannot be less than 1950'], 
        max: [2050, 'Year year cannot be greater than 2050']
    }, 
    description: {
        type: String, 
        required: [true, 'Description is required'], 
        minLength: [10, 'Description should be at least 10 characters long!']
    }, 
    price: {
        type: Number, 
        required: [true, 'Price is required'], 
        min: [0, 'Price year cannot be less than 0'], 
    }, 
    imageUrl: {
        type: String, 
        required: [true, 'Image Url is required'], 
    }, 
    material: {
        type: String, 
        required: false, 
    }
});

export const Furniture = model('Furniture', furnitureSchema, 'furnitures');