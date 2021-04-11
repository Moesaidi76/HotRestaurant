// path to html package

const path = require("path");

//Routing 

module.exports = function(app) {
    //get HTML requests... handle users visits to the page .... user will be shown with html 

    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/tables.html"));
    });

    app.get("/reserve", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/reserve.html"));
    });

    // when no matching route found. Default to home 
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};