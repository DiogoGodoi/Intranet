const express = require('express')
const router = express.Router();
const mongoose = require('mongoose');
require('././../../models/modelReunioes');
const Reunioes = mongoose.model('Reunioes')

router.get('/reunioes/cadastrar', (req, res)=>{
    var mensagem = [];
    var dia = req.body.dia;
    var hora = req.body.hora;
    var assunto = req.body.assunto;
    var participante1 = req.body.participante1;
    var participante2 = req.body.participante2;
    res.render('adminCadastrarReuniao', {mensagem, dia, hora, assunto, participante1, participante2})
})

router.post('/reunioes/cadastrar/add', (req, res)=>{

    var mensagem = [];
    var dia = req.body.dia;
    var hora = req.body.hora;
    var assunto = req.body.assunto;
    var participante1 = req.body.participante1;
    var participante2 = req.body.participante2;

    if(!dia || typeof dia == undefined || dia == null){
        mensagem.push({erro: "Por favor insira a data da reunião"})
    }
    
    if(!hora || typeof hora == undefined || hora == null){
        mensagem.push({erro: "Por favor insira a hora da reunião"})
    }
    
    if(!assunto || typeof assunto == undefined || assunto == null){
        mensagem.push({erro: "Por favor insira o assunto da reunião"})
    }

    if(!participante1 || typeof participante1 == undefined || participante1 == null || 
        !participante2 || typeof participante2 == undefined || participante2 == null){
        mensagem.push({erro: "A reunião só pode ser agendada por no mímino 2 participantes"})
    }

    if(participante2.lenght <2 || participante1.lenght <2) {
        mensagem.push({erro: "Nome do participante muito curto"})
    }

    if(mensagem.length >0){
        res.render('adminCadastrarReuniao', {mensagem: mensagem, dia, hora, assunto, participante1, participante2})
    }else{

        const novaReuniao ={
            dia: req.body.dia,
            hora: req.body.hora,
            assunto: req.body.assunto,
            participante1: req.body.participante1,
            participante2: req.body.participante2,
            participante3: req.body.participante3,
            participante4: req.body.participante4,
            participante5: req.body.participante5,
            participante6: req.body.participante6,
            participante7: req.body.participante7,
            participante8: req.body.participante8,
            participante9: req.body.participante9,
            participante10: req.body.participante10,
        }   
        
        new Reunioes(novaReuniao).save().then(()=>{
            mensagem.push({sucesso: "Reunião agendada com sucesso"})
            res.render('adminCadastrarReuniao', {mensagem: mensagem, dia, hora, assunto, participante1, participante2})
            console.log('Reuniao Cadastrada com sucesso')
        })
    }
})
    
    module.exports = router;