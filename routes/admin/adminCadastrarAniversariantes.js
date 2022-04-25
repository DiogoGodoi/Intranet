const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelAniversariantes');
const Aniversariantes = mongoose.model('Aniversario');
const path = require('path');
const fs = require('fs');

const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});
 
const upload = multer({ storage: storage });


//Rota de cadastro de aniversariantes
router.get('/aniversariantes/cadastrar', (req, res) => {
  
  var erros = []
  res.render('adminCadastrarAniversariantes', {erros})
})
//Rota de post de cadastro de aniversariantes
router.post('/aniversariantes/add', upload.single('foto'), (req, res) => {

  var erros = []
  
  if (!req.body.dia || typeof req.body.dia == undefined || req.body.dia == null) {
    erros.push({texto: 'data de aniversário inválida'})
  }

  if (!req.body.foto || typeof req.body.foto == undefined || req.body.foto == null) {
    erros.push({texto: 'insira a foto'})
  }

  if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
    erros.push({texto: 'Nome inválido'})
  }

  if(req.body.nome.length <4) {
    erros.push({texto: "nome muito curto"})
  }
      
  if(erros.length > 0) {
    res.render('adminCadastrarAniversariantes', {erros: erros})
  }else{
  
      const novoAniversariante = {
      nome: req.body.nome,
      setor: req.body.setor,
      dataAniversario: req.body.dataAniversario,
      foto: {
        data: fs.readFileSync(path.join('public/uploads/' + req.file.filename)),
        contentType: 'foto/png'
      } 
    }
    new Aniversariantes(novoAniversariante).save().then(()=>{
      res.render('adminCadastrarAniversariantes')
      console.log('Aniversariante cadastrado com sucesso')
    }).catch((erro)=>{
      console.log('Erro no cadastro', erro)
    })
  }
})
  
  module.exports = router
