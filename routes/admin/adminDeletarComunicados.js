const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelComunicados');
const Comunicados = mongoose.model('Comunicados');

router.get('/comunicados/deletar/:id', (req, res) =>{
    Comunicados.remove({_id: req.params.id}).then(()=>{
        res.redirect('/admin/comunicados/exibir')
    }).catch((erro)=>{
        console.log('Erro ao apagar', erro)
    })
})

module.exports = router;