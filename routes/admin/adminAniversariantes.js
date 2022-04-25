const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelAniversariantes')
const Aniversariantes = mongoose.model('Aniversario')

//Rota de cadastro de aniversariantes
router.get('/aniversariantes', (req, res) => {
  res.render('adminAniversariantes')
})
//Rota de post de cadastro de aniversariantes
router.post('/aniversariantes/add', (req, res) => {
      novoAniversariante = {
      nome: req.body.nome,
      setor: req.body.setor,
      dataAniversario: req.body.dataAniversario,
      foto: req.body.foto
    }
    new Aniversariantes(novoAniversariante).save().then(()=>{
      res.render('adminAniversariantes')
      console.log('Aniversariante cadastrado com sucesso')
    }).catch((erro)=>{
      console.log('Erro no cadastro', erro)
    })
})

module.exports = router;
