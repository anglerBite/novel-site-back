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

//追加
app.use(express.static(path.join(__dirname, 'frontend','build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
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