require('dotenv').config()
const express = require('express')
const sequelize = require('./bd')
const PORT = process.env.PORT || 3000

const app = express()

const start = async () => {

    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log('Server started on port: ' + PORT))
    } catch(e){
        console.log(e)
    }

}

start()
   
