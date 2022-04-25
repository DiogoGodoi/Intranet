const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelComunicados');
const Comunicados = mongoose.model('Comunicados');

router.get('/comunicados/cadastrar', (req, res)=>{
    var mensagens = [];
    var titulo = req.body.titulo;
    var mensagem = req.body.mensagem;
    res.render('adminCadastrarComunicados', {mensagens, titulo, mensagem})
})

router.post('/comunicados/cadastrar/add', (req, res) =>{
    
    var mensagens = [];
    var titulo = req.body.titulo;
    var mensagem = req.body.mensagem;

    if(!titulo || typeof titulo == undefined || titulo == null) {
        mensagens.push({erro: "Por favor insira um título para postagem"})
    }
    if(!mensagem || typeof mensagem == undefined || mensagem == null) {
        mensagens.push({erro: "Por favor insira a mensagem"})
    }

    if(mensagens.length > 0) {
        res.render('adminCadastrarComunicados', {mensagens: mensagens, mensagem, titulo})
    
    }else{        
            const novoComunicado = {
            titulo: req.body.titulo,
            mensagem: req.body.mensagem,
        }
        new Comunicados(novoComunicado).save().then(()=>{
            mensagens.push({sucesso: 'Comunicado cadastrado com sucesso'})
            res.render('adminCadastrarComunicados', {mensagens: mensagens, mensagem, titulo})
            console.log('comunicado cadastrado')
        }).catch((erro)=>{
            console.log('erro no cadastro', erro)
        })
    }
        
})
    
module.exports = router;