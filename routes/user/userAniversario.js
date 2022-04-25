const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelAniversariantes')
const Aniversariantes = mongoose.model('Aniversario')

router.get('/aniversariantes', (req, res) => {
    Aniversariantes.find().then((aniversariantes)=>{
        res.render('userAniversarios', {aniversariantes: aniversariantes})
    })
})

module.exports = router