const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')
const cors =require('cors')

//middleware
app.use(express.json())
//cors
app.use(cors())
//routes

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`running in port ${port}`)
  })
})
