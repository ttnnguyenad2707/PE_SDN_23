import * as dotenv from 'dotenv'
import express from 'express';
import ConnectDB from './src/database/mongodb.js';
import cors from 'cors';
import router from './src/router/index.router.js'
dotenv.config();

const app = express()
const port = process.env.PORT || 5000
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL }))
app.use('/', router)

app.listen(port, async () => {
    await ConnectDB();
    console.log(`Example app listening on port ${port} ${process.env.CLIENT_URL}`)
})
