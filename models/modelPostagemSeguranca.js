const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostagemSeguran├ža = new Schema({

    titulo: {
        type: String,
        required: true,
    },
    mensagem: {
        type: String,
        required: true,
    }

})

mongoose.model('PostagemSeguranca', PostagemSeguran├ža);

module.exports = PostagemSeguran├ža;