const router = require('express').Router()
const Person = require('../models/Person')

// API CRUD

// criação de dados

router.post('/', async (req,res) => {

    // req
    
    const {name, estrela , approved} = req.body

    if(!name){
        res.status(422).json({error:'o nome é obrigatorio'})
        return
    } 

    const person = {
        name,
        estrela,
        approved,
    }

    try{

       // criar
      await Person.create(person)

      res.status(201).json({ message:'Restaurante cadastrado com sucesso'})

    } catch (error){
        res.status(500).json({error: error})
    }
})

// Leitura de Dados

router.get('/', async (req,res) => {
    try {

     const people = await Person.find()

     res.status(200).json(people)
        
    } catch (error) {
        res.status(500).json({ error : error})
    }



})

// Id
router.get('/:id', async (req,res) => {


const id = req.params.id

try {
    
    const person= await Person.findOne({ _id:id })

    if(!person){
        res.status(422).json({message: 'Restaurante não encontrado'})
        return
    }

    res.status(200).json(person)
} catch (error) {
    res.status(500).json({ error : error})
}
})

// Atualização

router.patch('/:id', async (req,res) => {
    const id = req.params.id
    const {name, estrela, approved} = req.body
    const person = {
        name,
        estrela,
        approved,
    }
    try {
      
       const updatedPerson = await Person.updateOne({ _id:id}, person)
       
       

       if( updatedPerson.matchedCount === 0){
        res.status(422).json({message: 'Restaurante não encontrado'})
        return

       }


       res.status(200).json(person)

    } catch (error) {
        res.status(500).json({ error : error})
}


})

// Delete 
router.delete('/:id', async (req,res) => {
       
    const id = req.params.id

    const person = await Person.findOne({ _id:id})
   
    if(!person){

        res.status(422).json({ message: 'Restaurante não encontrado'})
        return
    }
    try {
        
      await Person.deleteOne({_id:id})

      res.status(200).json({ message: "Restaurante Apagado"})

    } catch (error) {
        res.status(500).json({ error : error})
    }




})

module.exports = router

