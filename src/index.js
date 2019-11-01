const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

const myUser = {

    email: "federico_escalante@outlook.com",
    password: "1234"
}
const app = express()
app.use(bodyParse.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("server working")
})

app.post("/login", (req, res) => {
    console.log(req.body)
    if(!req.body.email){
       return res.status(400).send({
            succes:false,
            message: "Email is required",
        })
    }
    if(!req.body.password){
        return res.status(400).send({
             succes:false,
             message: "Pasword is required",
         })
     }
     if (req.body.email != myUser.email || req.body.password !== myUser.password){
        return res.status(401).send({
            succes:false,
            message: "User tu hermana",})
     }
    return res.status(200).send({
        succes: true,
        message: "User logged",
        user: myUser,

    })
})
app.listen(4000, () => {
    console.log("Server working on localhost:4000")
})

