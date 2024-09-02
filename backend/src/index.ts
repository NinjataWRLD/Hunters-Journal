import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import monsterRoutes from './API/Routes/MonsterRoutes.js';
import humanRoutes from './API/Routes/HumanRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@mern-demo.q29laeu.mongodb.net/?retryWrites=true&w=majority&appName=MERN-Demo`)
    .then(() => console.log('MongoDB connected'))
    .catch(e => console.error(e));

app.use(bodyParser.json());
app.use(cors());
app.use('/api/monsters', monsterRoutes);
app.use('/api/humans', humanRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});