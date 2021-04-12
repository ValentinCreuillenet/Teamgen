var express = require('express');
var app = express();

app.use((express.json()));
app.use(express.urlencoded({ extended: true }))


var students = ["Maxime","Juan","Yohan","Laurène","Valentin","Fanny","Noureddine","Marylise",
"Lorenzo","Alexandre","Tamara","Maïalen","Lucas","Sidney","Vincent"];

app.use((req,res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Headers", "*")
    next();
})

app.get("/students",function (req,res){
    res.send(students);
})

app.post("/students",function (req,res){
    res.sendStatus(res.statusCode);

    console.log(students);

    if(req.body.student){
    addStudent(req.body.student);
    }
    console.log(students);
})

/**
 * Ajoute un stagiaire a la "BDD"
 * @param {*} student 
 */
function addStudent(student){
    if(!students.includes(student))
    {
        students.push(student);
    }
}


app.listen(4444);