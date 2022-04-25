const express = require('express')
const router = express.Router();
const mongoose = require('mongoose')
require('../../models/modelReunioes')
const Reunioes = mongoose.model('Reunioes')

router.get('/reunioes/alterar/:id', (req, res)=>{
    Reunioes.find({_id: req.params.id}).then((reunioes)=>{
        res.render('adminAlterarReuniao', {reunioes: reunioes})
    })
})

router.post('/reunioes/alterar', (req, res) => {
    Reunioes.findOne({_id: req.body.id}).then((reunioes)=>{
        reunioes.dia = req.body.dia,
        reunioes.hora = req.body.hora,
        reunioes.assunto = req.body.assunto,
        reunioes.participante1 = req.body.participante1,
        reunioes.participante2 = req.body.participante2,
        reunioes.participante3 = req.body.participante3,
        reunioes.participante4 = req.body.participante4,
        reunioes.participante5 = req.body.participante5,
        reunioes.participante6 = req.body.participante6,
        reunioes.participante7 = req.body.participante7,
        reunioes.participante8 = req.body.participante8,
        reunioes.participante9 = req.body.participante9,
        reunioes.participante10 = req.body.participante10

        reunioes.save().then(()=>{
            console.log('alterado com sucesso')
            res.redirect('/admin/reunioes/exibir')
        }).catch((erro)=>{
            console.log('erro ao alterar', erro)
        }).catch((erro)=>{
            console.log('erro interno')
        })
    })
})


module.exports = router;