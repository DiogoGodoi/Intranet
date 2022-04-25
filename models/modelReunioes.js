const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reunioes = new Schema( {
    dia: {
     type: String,
     required: true,    
    },
    hora: {
     type: String,
     required: true
    },
    assunto: {
            type: String,
            required: true,
    },
    participante1: {
            type: String,
            required: false,
    },
    participante2: {
            type: String,
            required: false,
    },
    participante3: {
            type: String,
            required: false,
    },
    participante4: {
            type: String,
            required: false,
    },
    participante5: {
            type: String,
            required: false,
    },
    participante6: {
            type: String,
            required: false,
    },
    participante7: {
            type: String,
            required: false,
    },
    participante8: {
            type: String,
            required: false,
    },
    participante9: {
            type: String,
            required: false,
    },
    participante10: {
            type: String,
            required: false,
   }
})

mongoose.model('Reunioes', Reunioes)
module.exports = Reunioes