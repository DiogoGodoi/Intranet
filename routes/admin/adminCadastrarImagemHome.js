const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelImagensHome');
const HomeImagens = mongoose.model('HomeImagens');
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

router.get('/imagens/cadastrar', (req, res)=>{
    res.render('adminCadastrarImagemHome')
})


router.post('/imagens/cadastrar', upload.single('foto'), (req, res) => {
        novaImagem = {
            foto: {
                data: fs.readFileSync(path.join('public/uploads/' + req.file.filename)),
                contentType: 'foto/png'
                  } 
        }
        new HomeImagens(novaImagem).save().then(()=>{
            console.log('cadastrado')
            res.render('adminCadastrarImagemHome')
        }).catch((erro)=>{
            console.log('erro no cadastro', erro)
        })
})

module.exports = router