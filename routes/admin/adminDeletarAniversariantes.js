const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelAniversariantes')
const Aniversariantes = mongoose.model('Aniversario')

router.get('/aniversariantes/deletar/:id', (req, res)=>{
    Aniversariantes.remove({_id: req.params.id}).then(()=>{
        res.redirect('/admin/aniversariantes/exibir')
    })
})

module.exports = router