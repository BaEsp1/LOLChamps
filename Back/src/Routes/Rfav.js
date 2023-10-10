const {Router} = require("express");

let favs = []

const favsR = Router ();

favsR.post("/create", (req , res) =>{
    favs.push({...req.body})
    res.status(201).send(favs)
})

favsR.get("/get",(req, res) =>{
    return res.json(favs);
})

favsR.delete("/delete/:id", (req, res) =>{
    const {id} = req.params;
    favs = favs.filter((pj) => pj.id !== Number(id));
    return res.status(200).json(favs)
})

module.exports = favsR;