//mongodb://localhost:27017

cosnt mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser : true, useUniFieldTopology: true});

const db =  mongoose.connection;

db.on('error', console.error.bind(console,'connection error : '))
//db.once() é usado para executar uma função apenas 1 vez no evento//

db.once ('open', fuction(){
    console.log("Estamos conectados ao banco")
})