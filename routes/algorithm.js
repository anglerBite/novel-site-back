const novelSchema = require('../model/schema');


const getAllNovels = async (req, res) => {
    try {
        const getAll = await novelSchema.find({});
        res.status(200).json(getAll);
    } catch (err) {
        res.status(500).json(err);
    }
}

const postNovel = async (req, res) => {
    try {
        const postNovel = await novelSchema.create(req.body);
        res.status(200).json(postNovel);
    } catch (err){
        res.status(500).json(err);
    }
}

const getSingle = async (req, res) => {
    try {
        const getSingle = await novelSchema.findOne({ _id: req.params.id});
        if(!getSingle) {
            res.status(404).json(`${req.params.id}は存在しません`)
        }
        res.status(200).json(getSingle);
    } catch (err){
        res.status(500).json(err);
    }
}

const updateNovel = async (req, res) => {
    try {
        const updateNovel = await novelSchema.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            {
                new: true
            });
        if(!updateNovel) {
            res.status(404).json(`${req.params.id}は存在しません`)
        }
        res.status(200).json(updateNovel);
    } catch (err){
        res.status(500).json(err);
    }
}

const deleteNovel = async (req, res) => {
    try {
        const deleteNovel = await novelSchema.findOneAndDelete({ _id: req.params.id});
        if(!deleteNovel) {
            res.status(404).json(`${req.params.id}は存在しません`)
        }
        res.status(200).json(deleteNovel);
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    getAllNovels,
    postNovel,
    getSingle,
    updateNovel,
    deleteNovel
}