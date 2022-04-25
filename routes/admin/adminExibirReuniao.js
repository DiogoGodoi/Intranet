const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
require('././../../models/modelReunioes');
const Reunioes = mongoose.model('Reunioes')

router.get('/reunioes/exibir', (req, res) => {
    Reunioes.find().then((reunioes)=>{        
    res.render('adminExibirReuniao', {reunioes: reunioes})
    })
})

module.exports = router;