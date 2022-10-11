

const express = require("express")
const { listenerCount } = require("process")
const app = express()
const port = 3000
app.use(express.static("public"))

app.get("/home", (req, res)=>{
    res.sendFile(__dirname + "/views/home.html")
})

app.get("/about", (req,res)=>{
    res.sendFile(__dirname + "/views/about.html")
})










app.listen(port, ()=>{
    console.log("funciono")
})