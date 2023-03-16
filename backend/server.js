require('dotenv').config()
const { request, response } = require('express')
const express = require("express")

//express application
const app = express()

app.use((request,response, next) => {
    console.log(request.path, request.method)
    next()
})

app.get('/', (request,response) =>{
    response.json({msg:" Welcome to the Application"})
} )

//listen for request
app.listen(process.env.PORT, () => {
    console.log('listening on port 8080 !!', process.env.PORT)
})

process.env