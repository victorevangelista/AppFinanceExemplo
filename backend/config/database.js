const mongoose = require('mongoose')
module.exports = mongoose.connect('mongodb://localhost/db_finance')
//string de conexão com usuário, senha e porta ('mongodb://usuario:senha@localhost:port/db_finance')