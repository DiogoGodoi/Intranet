const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelAniversariantes');
const Aniversariantes = mongoose.model('Aniversario');
const fs = require('fs');
const path = require('path');

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

router.get('/aniversariantes/alterar/:id', (req, res) => {
    Aniversariantes.find({_id: req.params.id}).then((aniversariantes)=>{
        res.render('adminAlterarAniversariantes', {aniversariantes: aniversariantes})
    })
})

router.post('/aniversariantes/alterar', upload.single('foto'), (req, res) => {
    Aniversariantes.findOne({_id: req.body.id}).then((aniversariantes)=>{
        aniversariantes.setor = req.body.setor,
        aniversariantes.dataAniversario = req.body.dataAniversario,
        aniversariantes.nome = req.body.nome,
        aniversariantes.foto = {
            data: fs.readFileSync(path.join('public/uploads/' + req.file.filename)),
            contentType: 'foto/png'
                } 

        aniversariantes.save().then(()=>{
        res.redirect('/admin/aniversariantes/exibir')
        console.log('Registro alterado com sucesso')
    }).cath((erro)=> {
        console.log('Erro na alteração do registro', erro)
    })    
    
    }).catch((erro)=>{
        console.log('erro na edição', erro)
    })
})

module.exports = router