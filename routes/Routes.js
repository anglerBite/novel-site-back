const express = require('express');
const router = express.Router();
//algorithm.jsから読み込み
const {
    getAllNovels,
    getSelectTitle,
    postNovel,
    getSingle,
    updateTitleNovel,
    updateIndexNovel,
    updateTextNovel,
    deleteNovel,
    deleteAllNovel
} = require('./algorithm')

router.get('/', getAllNovels);//全て取得

router.get('/:title', getSelectTitle);//タイトルが同じデータを全て取得

router.post('/', postNovel);//投稿

router.get('/:id', getSingle);//特定の投稿を取得

router.patch('/', updateTitleNovel);//タイトル編集

router.patch('/index', updateIndexNovel);//サブタイトル編集

router.patch('/text', updateTextNovel);//本文編集

router.delete('/:id', deleteNovel);//特定の投稿を削除

router.delete('/', deleteAllNovel);//全ての投稿を削除

module.exports = router;