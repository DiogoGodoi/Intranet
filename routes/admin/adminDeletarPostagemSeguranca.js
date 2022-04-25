const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelPostagemSeguranca');
const Postagem = mongoose.model('PostagemSeguranca');

router.get('/postagem/seguranca/deletar/:id', (req, res)=> {
    Postagem.remove({_id: req.params.id}).then(()=>{
        res.redirect('/admin/postagem/seguranca/exibir')
    })
})

module.exports = router