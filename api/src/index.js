import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { routes } from './routs.js';

const app = express();

// Setup Mongoose
const url = 'mongodb://localhost:27017';
try {
    await mongoose.connect(url, {
        dbName: 'furniture',
    })

    console.log(`Successfully connected`);
} catch (err) {
    console.error(`Cannot connect to DB`);
    console.error(err.message);
}

// Add Cors
app.use(cors());

// Add Json Parser
app.use(express.json());

// Add Routs
app.use(routes)

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));