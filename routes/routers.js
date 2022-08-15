const { Router } = require("express");
const conection = require("../database/db");

const router = Router()

router.get("/",(req, res)=>{
    res.render("index",{titulo: "este es mi titulo"})
    conection.query(" SELECT * FROM users ",(error, results)=>{
        if (error) {
            throw error;
        }else{
            res.render("index",{results:results})
        }
    })
})

module.exports = router;