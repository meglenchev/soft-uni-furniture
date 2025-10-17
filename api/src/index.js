import express from 'express';
import cors from 'cors';
import { routes } from './routs.js';

const app = express();

// Add Cors
app.use(cors());

// Add Routs
app.use(routes)

app.listen(3030, () => console.log('Server is listening on http://localhost:3030...'));