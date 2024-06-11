const novelSchema = require('../model/schema');


const getAllNovels = async (req, res) => {
    try {
        const getAll = await novelSchema.find({});
        res.status(200).json(getAll);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getSelectTitle = async (req, res) => {
    try {
        const selectTitle = await novelSchema.find({title: req.params.title});
        res.status(200).json(selectTitle);
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

const updateTitleNovel = async (req, res) => {
    try {
        const response = await novelSchema.updateMany(
            { title: req.query.oldTitle }, 
            { $set: {title: req.query.newTitle} }
        );
        if(!response) {
            res.status(404).json(`${req.query.oldTitle}は存在しません`)
        }
        res.status(200).json(response);
    } catch (err){
        res.status(500).json(err);
    }
}

const updateIndexNovel = async (req, res) => {
    try {
        const response = await novelSchema.updateMany(
            { index: req.query.oldIndex }, 
            { $set: {index: req.query.newIndex} }
        );
        if(!response) {
            res.status(404).json(`${req.query.oldIndex}は存在しません`)
        }
        res.status(200).json(response);
    } catch (err){
        res.status(500).json(err);
    }
}

const updateTextNovel = async (req, res) => {
    try {
        const response = await novelSchema.updateMany(
            { text: req.query.oldText }, 
            { $set: {text: req.query.newText} }
        );
        if(!response) {
            res.status(404).json(`${req.query.oldText}は存在しません`)
        }
        res.status(200).json(response);
    } catch (err){
        res.status(500).json(err);
    }
}

const deleteNovel = async (req, res) => {
    try {
        const response = await novelSchema.findOneAndDelete({ _id: req.params.id});
        if(!response) {
            res.status(404).json(`${req.params.id}は存在しません`)
        }
        res.status(200).json(response);
    } catch (err){
        console.log(err)
    }
}

const deleteAllNovel = async (req, res) => {
    try {
        const response = await novelSchema.deleteMany({title: req.query.title});
        if(!response) {
            return res.status(404).json({message: `${req.query.title}は存在しません`});
        }
        res.status(200).json(response);
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    getAllNovels,
    getSelectTitle,
    postNovel,
    getSingle,
    updateTitleNovel,
    updateIndexNovel,
    updateTextNovel,
    deleteNovel,
    deleteAllNovel
}