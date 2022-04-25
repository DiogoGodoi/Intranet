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
  var mensagens = [];
  var dataAniversario = req.body.dataAniversario;
  var nome = req.body.nome;
  res.render('adminCadastrarAniversariantes', {mensagens, nome, dataAniversario})
})
//Rota de post de cadastro de aniversariantes
router.post('/aniversariantes/add', upload.single('foto'), (req, res) => {

  var mensagens = [];
  var dataAniversario = req.body.dataAniversario;
  var nome = req.body.nome;
  
  if (!dataAniversario || typeof dataAniversario == undefined || dataAniversario == null) {
    mensagens.push({erro: 'A data de aniversário não pode ser nula'})
  }

  if (!nome || typeof nome == undefined || nome == null) {
    mensagens.push({erro: 'O campo nome não pode ser nulo'})
  }


  if(nome.length <5) {
    mensagens.push({erro: "nome muito curto"})
  }

  if(mensagens.length > 0) {
    res.render('adminCadastrarAniversariantes', {mensagens: mensagens, nome, dataAniversario})
  
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
      mensagens.push({sucesso: "Aniversariante cadastrado"})
      res.render('adminCadastrarAniversariantes', {mensagens: mensagens, nome, dataAniversario})
      console.log('Aniversariante cadastrado com sucesso')
    }).catch((erro)=>{
      console.log('Erro no cadastro', erro)
    })
  }

})
  
  module.exports = router
