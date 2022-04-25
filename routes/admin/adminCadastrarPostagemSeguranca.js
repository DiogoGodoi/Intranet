const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelPostagemSeguranca')
const Postagem = mongoose.model('PostagemSeguranca')

router.get('/postagem/seguranca/cadastrar', (req, res) => {
    var mensagens = [];
    var titulo = req.body.titulo;
    var mensagem = req.body.mensagem;
    res.render('adminCadastrarPostagemSeguranca', {mensagens, titulo, mensagem})
})

router.post('/postagem/seguranca/cadastrar/add', (req, res) => {

    var mensagens = [];
    var titulo = req.body.titulo;
    var mensagem = req.body.mensagem;

    if(!titulo || typeof titulo == undefined || titulo == null) {
        mensagens.push({erro: "Por favor insira um titulo para postagem"})
    }

    if(!mensagem || typeof mensagem == undefined || mensagem == null) {
        mensagens.push({erro: "Por favor insira uma mensagem para postagem"})
    }

    if(mensagens.length > 0) {
        res.render('adminCadastrarPostagemSeguranca', {mensagens: mensagens, titulo, mensagem})
    }else{

        const novaPostagem = { 
            titulo: req.body.titulo,
            mensagem: req.body.mensagem
        }
        new Postagem(novaPostagem).save().then(()=>{
            mensagens.push({sucesso: "Postagem cadastrada com sucesso"})
            res.render('adminCadastrarPostagemSeguranca', {mensagens: mensagens, titulo, mensagem})
            console.log('Postagem cadastrada')
        }).catch((erro)=> {
            console.log('Erro na postagem', erro)
        })   
    }
})

module.exports = router