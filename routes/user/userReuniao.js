const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')
require('../../models/modelReunioes')
const Reuniao = mongoose.model('Reunioes')


router.get('/reunioes', (req, res)=>{
    Reuniao.find().then((reunioes)=>{
        res.render('userReuniao', {reunioes: reunioes} )
    }).catch((erro)=>{
        console.log('erro: ', erro)
    })
})

module.exports = router;