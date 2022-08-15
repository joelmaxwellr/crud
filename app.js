const express = require("express")
const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded({extends:false}))
app.use(express.json())

app.use("/", require("./routes/routers"))

app.listen(3000,()=>{
    console.log("Server Running http://localhost:3000")
})