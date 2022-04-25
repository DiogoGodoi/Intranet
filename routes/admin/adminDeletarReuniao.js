const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
require('././../../models/modelReunioes');
const Reunioes = mongoose.model('Reunioes')

router.get('/reunioes/deletar/:id', (req, res)=>{
    Reunioes.remove({_id: req.params.id}).then(()=>{
        res.redirect('/admin/reunioes/exibir')
    })
})

module.exports = router