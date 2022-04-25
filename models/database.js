const mongoose = require('mongoose')
const mongodb = require('mongodb')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/IntranetPta').then(()=>{
    console.log('Conectado ao banco')
}).catch((erro)=>{
    console.log('Erro ao se conectar com o mongo', erro)
})

