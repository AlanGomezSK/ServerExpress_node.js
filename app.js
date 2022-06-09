//usando objecto espress
const express = require("express")
//app de express
const app = express()
//puerto en el que veremos nuestra app:     localhost:3000
const port = 3000


//path inicial, respondera a la url localhost:3000
app.get("/", (req,res)=>{
    res.send("hello world")
})
//respondiendo texto
//localhost:3000/launchx
app.get("/launchx", (req,res)=>{
    res.send("bienvenidos a LaunchX")
})
//regresando un objeto
//localhost:3000/explorersInNode
app.get("/explorersInNode", (req,res)=>{
    const explorer = {name: "explorer", msg:"hello"}
    res.send(explorer)
})
//Query Params : Recibir parametros por la url
//http://localhost:3000/explorers/alan
//req.params={"explorerName":"carlo"}
app.get("/explorers/:explorerName",(req,res)=>{//:represnetan que sera un valor enviado por la url
    res.send(req.params)//al momento de poner el nombre de alan o cualquiera en la url sera este el que este dentro del parametro
})
//con esto iniciamos nuestra app
app.listen(port, ()=>{
    console.log(`example app listening on port ${port}`)
})

// control+c para cerrar el servidor local