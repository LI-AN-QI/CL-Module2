let express = require("express");
let app = express();

//Serve public folder
app.use('/', express.static('public'));

//Tell server which port to listen on
app.listen(3000, ()=> {
    console.log("listening at localhost:3000");
});