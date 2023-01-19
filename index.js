// configuração inicial
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
          extended: true,
    }),
)
app.use(express.json())

// Rotas API
const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)

// Endpoint
app.get('/',(req,res)=>{

    
    res.json({ message:' Funcionando'})
})

//DB
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)

mongoose
  .connect(
    `colocar link do servidor que está no Readme`
  )
    .then(() =>{

        console.log("Conectando ao MongoDB")
        app.listen(3000)
   
    })
    .catch((err) => console.log(err))


