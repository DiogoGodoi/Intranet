const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models/database');
const admin = require('./routes/admin/admin');

//Imports de rotas do CRUD do model de aniversariantes
const adminCadastrarAniversariantes = require('./routes/admin/adminCadastrarAniversariantes');
const adminExibirAniversariantes = require('./routes/admin/adminExibirAniversariantes');
const adminAlterarAniversariantes = require('./routes/admin/adminAlterarAniversariante');
const adminDeletarAniversariantes = require('./routes/admin/adminDeletarAniversariantes');

//Imports de rotas do CRUD do model de reunião
const adminCadastrarReunião = require('./routes/admin/adminCadastrarReuniao');
const adminExibirReuniao = require('./routes/admin/adminExibirReuniao');
const adminDeletarReuniao = require('./routes/admin/adminDeletarReuniao');
const adminAlterarReuniao = require('./routes/admin/adminAlterarReuniao');

//Imports de rotas do CRUD do model de postagem de segurança do trabalho
const adminCadastrarPostagemSeguranca = require('./routes/admin/adminCadastrarPostagemSeguranca');
const adminExibirPostagemSeguranca = require('./routes/admin/adminExibirPostagemSeguranca');
const adminAlterarPostagemSeguranca = require('./routes/admin/adminAlterarPostagemSeguranca');
const adminDeletarPostagemSeguranca = require('./routes/admin/adminDeletarPostagemSeguranca');

//Imports de rotas do CRUD do model de comunicados
const adminCadastrarComunicados = require('./routes/admin/adminCadastrarComunicados');
const adminExibirComunicados = require('./routes/admin/adminExibirComunicados');
const adminAlterarComunicados = require('./routes/admin/adminAlterarComunicados');
const adminDeletarComunicados = require('./routes/admin/adminDeletarComunicados');

//Imports de rotas do CRUD do model de carrousel
const adminCadastrarImagemCarrousel = require('./routes/admin/adminCadastrarImagemHome');

//Importa de rotas de usuario
const userAniversio = require('./routes/user/userAniversario');
const userReuniao = require('./routes/user/userReuniao');
const userSeguranca = require('./routes/user/userSeguranca');
const userComunicados = require('./routes/user/userComunicados');
const homeUser = require('./routes/user/userHome');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', "ejs")
app.use(express.static(path.join(__dirname, 'public')));

//Rotas
app.use('/admin', admin, adminCadastrarAniversariantes, adminExibirAniversariantes, 
adminAlterarAniversariantes, adminDeletarAniversariantes,adminCadastrarReunião,
adminCadastrarPostagemSeguranca, adminExibirReuniao, adminDeletarReuniao, 
adminAlterarReuniao, adminCadastrarPostagemSeguranca, adminExibirPostagemSeguranca, 
adminAlterarPostagemSeguranca, adminDeletarPostagemSeguranca, adminCadastrarComunicados,
adminExibirComunicados, adminAlterarComunicados, adminDeletarComunicados, adminCadastrarImagemCarrousel
)
app.use('/home', userAniversio, userReuniao, userSeguranca,
userComunicados, homeUser)

app.listen(8000, ()=>{
  console.log('Servidor rodando na porta 8000')
})
