const mongoose = require('mongoose')

const Person = mongoose.model('Person',{
    name:String,
    email:String,
    cpf:Number,
    adress:String,
    phone:String,

})

module.exports = Person