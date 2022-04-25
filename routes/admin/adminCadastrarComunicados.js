const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelComunicados');
const Comunicados = mongoose.model('Comunicados');

router.get('/comunicados/cadastrar', (req, res)=>{
    res.render('adminCadastrarComunicados')
})

router.post('/comunicados/cadastrar', (req, res) =>{
    novoComunicado = {
        titulo: req.body.titulo,
        mensagem: req.body.mensagem,
    }
    new Comunicados(novoComunicado).save().then(()=>{
        res.redirect('/admin/comunicados/exibir')
        console.log('comunicado cadastrado')
    }).catch((erro)=>{
        console.log('erro no cadastro', erro)
    })
    
})

module.exports = router;