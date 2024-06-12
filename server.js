const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const connect = require('./db/mongoDB');
const routes = require('./routes/Routes');
const login = require('./routes/LoginRoutes');
const PORT = 3000;
require('dotenv').config();

app.use(express.json());

//ルーティング
app.use(cors());
app.use('/novel', routes);
app.use('/login', login);

// デフォルトルートの設定
app.get('/', (req, res) => {
    res.send('API is working');
});


//データベース接続とサーバー起動
const connectDB = async () => {
    try {
        await connect(process.env.MONGO_URL);
        app.listen(process.env.PORT || PORT, () => console.log('サーバー起動'));
    } catch (err) {
        console.log(err)
    }
};

connectDB();