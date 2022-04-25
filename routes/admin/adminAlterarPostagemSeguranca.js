const express = require('express');
const req = require('express/lib/request');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelPostagemSeguranca');
const Postagem = mongoose.model('PostagemSeguranca');

router.get('/postagem/seguranca/alterar/:id', (req, res) => {
    Postagem.find({id_: req.params.id}).then((postagens) => {
        res.render('adminAlterarPostagemSeguranca', {postagens: postagens})
    })
})

router.post('/postagem/seguranca/alterar', (req, res)=>{
    Postagem.findOne({_id: req.body.id}).then((postagens)=>{
        postagens.titulo = req.body.titulo,
        postagens.mensagem = req.body.mensagem

        postagens.save().then(()=>{
            res.redirect('/admin/postagem/seguranca/exibir')
            console.log('Postagem alterada')
        }).catch((erro)=>{
            console.log('Houve um problema na alteração', erro)
        }).catch((erro)=>{
            console.log('Erro interno', erro)
        })
    })
})

module.exports = router