const expr = require("express")
const router = expr.Router() // creates a router
module.exports = router // this LOC will export the variable "router" to index.js .... HOW?  because in index.js we wrote : var exported = require("./data.js")

// assuming below is the database info from mongodb...
const jsonobj = [{id : 100, pname : "pedri", position : "cm",club: "barca", rating : 97},
                {id : 101, pname : "vitinha", position : "cdm", club : "psg", rating : 91},
                {id :103, pname : "bruno_fernanades", position : "cam", club : "mun", rating : 89}]

router.get("/:id", (req, res) => {
    current_json_data = jsonobj.filter((j) => {
        if(j.id == req.params.id){
            return true;
        }})
    if(current_json_data.length == 1 ){
        res.json(current_json_data[0])
        //res.json(current_json_data[0]["pname"])
    }
    else{
        res.send("no data")
    }
})