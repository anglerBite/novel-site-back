const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connect = require('./db/mongoDB');
const routes = require('./routes/Routes');
const PORT = 3000;
require('dotenv').config();

app.use(express.json());

//ルーティング
app.use(cors());
app.use('/novel', routes);

//データベース接続とサーバー起動
const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URL);
        app.listen(PORT, () => console.log('サーバー起動'));
    } catch (err) {
        console.log(err)
    }
};

connectDB();