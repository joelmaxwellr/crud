const { Router } = require("express");
const conection = require("../database/db");

const router = Router()

router.get("/",(req, res)=>{
   // res.render("index",{titulo: "este es mi titulo"})
    conection.query(" SELECT * FROM users ",(error, results)=>{
        if (error) {
            throw error;
        }else{
            res.render("index",{results:results})
        }
    })
})

router.get("/create",(req, res)=>{
    res.render("create")
 })
 

router.get("/edit/:id", (req,res)=>{
  // const id = req.params.id 
    //res.render("edit",{id:1})
    const id = req.params.id
    conection.query(" SELECT * FROM users WHERE id=?",[id],(error, results)=>{
        if (error) {
            throw error;
        }else{
            res.render("edit",{user:results[0]})
        }
    })

})

router.post("/save",(req,res)=>{
    const {nombre,precio} = req.body
   conection.query("INSERT INTO users SET ?",{nombre:nombre, precio:precio},(error,results)=>{
    if (error) {
        console.log(error)
    } else {
        res.redirect("/")
    }
   })
})

router.post("/update",(req,res)=>{
    const {id, nombre,precio} = req.body
    console.log(req.body)
   conection.query("UPDATE users SET ? WHERE id=?",[{nombre: nombre, precio:precio} , id],(error,results)=>{
    if (error) {
        console.log(error)
    } else {
        res.redirect("/")
    }
   })
})

router.get("/delete/:id",(req,res)=>{
    const id = req.params.id
    console.log(req.body)
   conection.query("DELETE FROM users WHERE id=?",[id],(error,results)=>{
    if (error) {
        console.log(error)
    } else {
        res.redirect("/")
    }
   })
})


module.exports = router;