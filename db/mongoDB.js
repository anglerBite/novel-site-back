const mongoose = require('mongoose');

const connect = async (url) => {
    mongoose.connect(url)
    .then(() => console.log('データベース接続完了'))
    .catch((err) => console.log(err));
}

module.exports = connect;