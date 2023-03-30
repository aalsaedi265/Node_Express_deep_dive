
const express = require('express')
const app = express()

// app.use(express.static(__dirname));

// app.get("/*", function(req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });


app.get("/api",(req, res) =>{
    res.json({"users": ["userOne" , "userTwo", "userThree"]})
})

app.listen(5000,()=> (console.log("wwrrrryyyyyyyyyyyyy")))