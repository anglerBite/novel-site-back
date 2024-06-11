const loginSchema = require('../model/loginSchema');
const bCrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllLoginData = async (req, res) => {
    try {
        const response = await loginSchema.find({});
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
}

const registerData = async (req, res) => {

    //response bodyの値を変数へ格納
        const adminId = req.body.adminId;
        const password = req.body.password;

    //パスワードの暗号化
    let hashedPassword = await bCrypt.hash(password, 10);

    //DBへ保存
    const newLogin = new loginSchema({
        adminId,
        password: hashedPassword,
    });

    await newLogin.save();

    //JWTの発行
    const token = jwt.sign(
        {
            adminId,
        },
        "SECRET_KEY",
        {
            expiresIn: '24h'
        })

    return res.json({
        token: token
    })
}

//ログイン用
const login = async (req, res) => {

    const { adminId, password } = req.body;

    const adminData = await loginSchema.find({});

    //ユーザー確認
    const id = await adminData.find(id => id.adminId === adminId);
    if (!id) {
        return res.status(401).json({ message: 'そのユーザーは存在しません' });
    }

    //パスワード復号
    const passArray = await adminData.map(pass => pass.password)
    const pass = passArray[0];
    const isMatch = await bCrypt.compare(password, pass)

    if (!isMatch) {
        return res.status(401).json({message: 'パスワードが間違っています。'})
    }

    //トークンの発行
    const token = jwt.sign(
        {
            adminId
        },
        "SECRET_KEY",
        {
            expiresIn: '24h',
        }
    )

    return res.json({
        token: token
    })

}

module.exports = {
    getAllLoginData,
    registerData,
    login
}