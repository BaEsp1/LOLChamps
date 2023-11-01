const { Router } = require("express");

let favs = [];

const favsR = Router();

favsR.post("/create", (req, res) => {
    
  const id = req.body;
    // Verificar si el ID ya existe en la lista
    console.log(req.body)
    const existingFav = favs.find((f) => f.id == id);

    if (existingFav) {
        return res.status(200).json(favs,{ message: "ID ya existe en la lista" });
    } else {
        favs.push(id);
        return res.status(201).json(favs);
    }
});

favsR.get("/get", (req, res) => {
  return res.json(favs);
});

favsR.delete("/delete/:id", (req, res) => {
  const  {id}  = req.params;

  console.log(id)

  console.log("pre",favs)
  favs = favs.filter((f) => f.id !== id);

  console.log("post",favs)
  return res.status(200).json(favs);
});

module.exports = favsR;