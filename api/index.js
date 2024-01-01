require('dotenv').config()
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require("./routes");

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);


const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        //await mongoose.connect('mongodb+srv://mongodb:K2MhDtg5x9H4h7b4@cluster0.571g4z6.mongodb.net/?retryWrites=true&w=majority');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        });
    } catch (e) {
        console.log(e);
    }
}

start().then();

