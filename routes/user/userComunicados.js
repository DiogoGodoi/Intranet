const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelComunicados')
const Comunicados = mongoose.model('Comunicados')

router.get('/comunicados/exibir', (req, res) => {
    Comunicados.find().then((comunicados)=> {
        res.render('userComunicados', {comunicados: comunicados})
    })
})

module.exports = router;