const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Aniversario = new Schema({
    nome: {
        type: String,
        required: true,
        min: 5,
    },
    setor: {
        type: String,
        required: true,
    },
    dataAniversario: {
        type: String,
        required: true,
    },
    foto: {
        data: Buffer,
        contentType: String,
        required: false,
    }
})

mongoose.model('Aniversario', Aniversario)

module.exports = Aniversario;