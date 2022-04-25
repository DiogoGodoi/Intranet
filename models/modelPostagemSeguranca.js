const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostagemSegurança = new Schema({

    titulo: {
        type: String,
        required: true,
    },
    mensagem: {
        type: String,
        required: true,
    }

})

mongoose.model('PostagemSeguranca', PostagemSegurança);

module.exports = PostagemSegurança;