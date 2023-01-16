const router = require('express').Router()
const Person = require('../models/Person')

router.post('/cadastro_cliente', async (req, res)=>{
    const {name, email, cpf, adress, phone} = req.body

    if(!name){
        res.status(422).json({error: 'O nome é obrigatório!'})
        return
    }
    if(!email){
        res.status(422).json({error: 'O e-mail é obrigatório!'})
        return
    }
    if(!cpf){
        res.status(422).json({error: 'O CPF é obrigatório!'})
        return
    }
    if(!adress){
        res.status(422).json({error: 'O endereço é obrigatório!'})
        return
    }
    if(!phone){
        res.status(422).json({error: 'O telefone é obrigatório!'})
        return
    }

    const person= {
        name, 
        email,
        cpf, 
        adress,
        phone
    }

    try{
        await Person.create(person)
        res.status(201).json({message: "Cliente cadastrado com sucesso!"})
    }catch(error){
        res.status(500).json({error:error})
    }
})

//Daniel: Resgatar contas de usuários
router.get('/cadastro_cliente', async (req, res) => {
    try{
        const accounts = await Person.find()

        res.status(200).json(accounts)

    }catch(error){

        res.status(500).json({error: error})

    }
})


//Daniel: busca cliente pelo CPF
router.get('/cadastro_cliente/:id', async (req, res)=>{
    const cpf = req.params.id

    try{
        const account = await Person.findOne({cpf:cpf})
        if(!account){
            res.status(422).json({error: 'Usuário não encontrado'})
            return
        }
        res.status(200).json(account)
    }catch(error){
        res.status(500).json({error: error})
    }
})

//Daniel: atualiza Cadastro cliente
router.put('/cadastro_cliente/:id', async (req, res)=>{

    const id = req.body.cpf
    const {name, email, cpf, adress, phone} = req.body

    const person ={
        name,
        email,
        cpf,
        adress,
        phone,
    }

    try{
        
        await Person.updateOne({cpf:id},person)

        res.status(200).json({message:"Atualização realizada com sucesso!"})

    }catch (error){
        res.status(500).json({error: error})
        return
    }
})

//Daniel: excluir Cadastro
router.delete('/cadastro_cliente/:id', async (req, res)=>{

    const cpf = req.params.id
    const person = await Person.findOne({cpf: cpf})

    if(!person){
        res.status(422).json({message: 'Cliente não localizado!'})
        return
    }

    try{
        
        await Person.deleteOne({cpf:cpf})

        res.status(200).json({message:"Cliente excluido com sucesso!"})

    }catch (error){
        res.status(500).json({error: error})
        return
    }
})

module.exports = router