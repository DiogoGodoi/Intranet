const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelComunicados');
const Comunicados = mongoose.model('Comunicados');


router.get('/comunicados/alterar/:id', (req, res) => {
    Comunicados.find({_id: req.params.id}).then((comunicados)=>{
        res.render('adminAlterarComunicados', {comunicados: comunicados})
    })
})

router.post('/comunicados/alterar', (req, res)=>{
    Comunicados.findOne({id: req.body.id}).then((comunicados)=>{
        comunicados.titulo = req.body.titulo,
        comunicados.mensagem = req.body.mensagem,

        comunicados.save().then(()=>{
            res.redirect('/admin/comunicados/exibir')
        }).catch((erro)=>{
            console.log('Erro de alteração')
        }).catch((erro)=>{
            console.log('Erro de cadastro')
        })
    })
})

module.exports = router;