const express = require('express');
const router = express.Router();
//algorithm.jsから読み込み
const {
    getAllNovels,
    postNovel,
    getSingle,
    updateNovel,
    deleteNovel
} = require('../routes/algorithm')

router.get('/', getAllNovels);//全て取得

router.post('/', postNovel);//投稿

router.get('/:id', getSingle);//特定の投稿を取得

router.patch('/:id', updateNovel);//編集

router.delete('/:id', deleteNovel);//特定の投稿を削除

module.exports = router;