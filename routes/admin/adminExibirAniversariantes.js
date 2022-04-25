const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelAniversariantes')
const Aniversariantes = mongoose.model('Aniversario')

router.get('/aniversariantes/exibir', (req, res) => {
    Aniversariantes.find().then((aniversariantes)=>{
        res.render('adminExibirAniversariantes', {aniversariantes: aniversariantes})
    })
})

module.exports = router