// Import packages
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { v4: uuidv4 } = require('uuid')

const fs = require("fs");

// Application
const app = express();

// Middleware
app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use(cors()); 

// Create
// Create
app.post("/dogs", (req, res) => {
  const dogsList = readJSONFile();

  // Fill in your code here
  var newDog = req.body;
  newDog.id = uuidv4();
  var dogList1 = [...dogsList, newDog];
  writeJSONFile(dogList1);
  res.json(newDog);

});

// Read One
app.get("/dogs/:id", (req, res) => {

  const dogsList = readJSONFile();
  const id = req.params.id;
  const filteredDogs = dogsList.filter((dog)=>dog.id===id)
  if(filteredDogs.length===0){
    res.status(404).json({error:'Dog not found'});
  }
  // Fill in your code here
     res.json(filteredDogs[0]);
});
// Read All
app.get("/dogs", (req, res) => {
  const dogsList = readJSONFile();
  // Fill in your code here
  res.json(dogsList);
});


// Update
app.put("/dogs/:id", (req, res) => {
  console.log('found');
  const dogsList = readJSONFile();
  const id = req.params.id;
  const name = req.body.name;
  const img = req.body.img;
  dogsList.map((dog)=>{if(dog.id===id){
    dog.name=name,
    dog.img = img
  }}
  );
  

  writeJSONFile(dogsList);
  // 
   
    // writeJSONFile(dogsList);
     res.json({message:'Dog updated'});
     
     
     
});

// Delete
app.delete("/dogs/:id", (req, res) => {
  const dogsList = readJSONFile();
  const id = req.params.id;
  // Fill in your code here
   const filteredDogs = dogsList.filter((dog)=>dog.id!==id)
   if(filteredDogs.length===0){
    res.status(404).json({error:'Dog not found'});
  }
  // Fill in your code here
     
  writeJSONFile(filteredDogs);
  res.json({message:'Dog deleted'});
 
});


// Reading function from db.json file
function readJSONFile() {
  return JSON.parse(fs.readFileSync("db.json"))["dogs"];
}

// Writing function from db.json file
function writeJSONFile(content) {
  fs.writeFileSync(
    "db.json",  
    JSON.stringify({ dogs: content }),
    "utf8", 
    err => { 
      if (err) {
        console.log(err);
      }}
    );
}

// Starting the server
app.listen("8000", () =>
  console.log("Server started at: http://localhost:8000")
)
