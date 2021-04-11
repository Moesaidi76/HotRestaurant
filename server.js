const express = require("express");

// Express configuration 
// basic properties to express server 

// stating that we're creating an express server 
const app = express();

// set a PORT 
const PORT = process.env.PORT || 3000;

// setting express app to handle data 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//*****************ROUTER*****************/
// Pointing the server to series of route files

require("./Routes/apiRoutes")(app);
require("./Routes/htmlRoutes")(app);


//*************Lister***********/
// Starting the server 

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});