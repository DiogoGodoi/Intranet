const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelPostagemSeguranca');
const Postagem = mongoose.model('PostagemSeguranca')


router.get('/postagem/seguranca/exibir', (req, res) => {
    Postagem.find().then((postagens) =>{
        res.render('adminExibirPostagemSeguranca', {postagens: postagens})
    })
})

module.exports = router;