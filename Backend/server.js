const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
app.use(bodyParser.json())
app.use(cors({ origin: "*" }))
const data = require('./Data.json')


function validation(req, res, next) {


}


app.get('/get', (req, res) => {

})

app.post('/post', validation, (req, res) => {


    try {

    } catch (error) {
        res.status(500).send("error occured")
    }

})

app.get("/fetch/data", (req, res) => {
    console.log("called");
    res.status(200).send(data)

})



app.listen(3000, console.log("server is running"))