const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
require('././../../models/modelReunioes');
const Reunioes = mongoose.model('Reunioes')

router.get('/reunioes/cadastrar', (req, res)=>{
    res.render('adminCadastrarReuniao')
})

router.post('/reunioes/cadastrar', (req, res)=>{
    novaReuniao ={
        dia: req.body.dia,
        hora: req.body.hora,
        assunto: req.body.assunto,
        participante1: req.body.participante1,
        participante2: req.body.participante2,
        participante3: req.body.participante3,
        participante4: req.body.participante4,
        participante5: req.body.participante5,
        participante6: req.body.participante6,
        participante7: req.body.participante7,
        participante8: req.body.participante8,
        participante9: req.body.participante9,
        participante10: req.body.participante10,
    }   

    new Reunioes(novaReuniao).save().then(()=>{
        res.render('adminCadastrarReuniao')
        console.log('Reuniao Cadastrada com sucesso')
    })
})

module.exports = router;