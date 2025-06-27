const express = require("express");
const cors = require("cors");
const app = express()
const path = require("path");

app.use(cors())
require("dotenv").config({path:"./config/.env"});

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from Local-Event-Holder!'
  })
})


app.listen(process.env.PORT || 5000, () => console.log('Local Event Server started on http://localhost:5000'))