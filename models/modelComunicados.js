const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comunicados = new Schema({

    titulo: {
        type: String,
        required: true,
    },
    mensagem: {
        type: String,
        required: true
    }

})

mongoose.model('Comunicados', Comunicados);

module.exports = Comunicados;