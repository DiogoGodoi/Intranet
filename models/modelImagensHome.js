const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HomeImagens= new Schema({
    foto: {
        data: Buffer,
        contentType: String,
        required: false
    }
})

mongoose.model('HomeImagens', HomeImagens)
module.exports = HomeImagens