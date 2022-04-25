const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../../models/modelImagensHome');
const HomeImagens = mongoose.model('HomeImagens')

router.get('/', (req, res) => {
    HomeImagens.find().then((imagens)=>{
        res.render('homeUser', {imagens: imagens});
    })
})

module.exports = router