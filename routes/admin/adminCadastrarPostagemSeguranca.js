const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelPostagemSeguranca')
const Postagem = mongoose.model('PostagemSeguranca')

router.get('/postagem/seguranca/cadastrar', (req, res) => {
    res.render('adminCadastrarPostagemSeguranca')
})

router.post('/postagem/seguranca/cadastrar', (req, res) => {
    novaPostagem = {
        titulo: req.body.titulo,
        mensagem: req.body.mensagem
    }
    new Postagem(novaPostagem).save().then(()=>{
        res.render('adminCadastrarPostagemSeguranca')
        console.log('Postagem cadastrada')
    }).catch((erro)=> {
        res.render('adminCadastrarPostagemSeguranca')
        console.log('Erro na postagem', erro)
    })

})

module.exports = router