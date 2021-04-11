// load dta 
// linking the routes to a series of DATA sources 
// DATA sources hold arrays of infos on table-data, waitinglist, ect.

const tableData = require("../Data/tableData");
const waitingListData = require("../Data/waitinglistData");

//Routing 

module.exports = function(app) {
    //***********************************API get request*********************************** 
    //The code will handle when users visit the page 
    // When user visit localhost:3000 link. Will be provided with ex: localhost:3000/api/admin  the JSON data in the table will be shown

    app.get("/api/tables", function(req, res) {
        res.json(tableData);
    });

    app.get("/api/waitlist", function(req, res) {
        res.json(waitingListData);
    });

    // ***************************API POST Requests*********************************************
    // the code will handle the forms when they are submitted by the user *Submit data to the server.
    //JSON object when a user submit 
    // user fills out the reservation requet ... data gets sent to the server
    // server save data to tableDara array 

    app.post("/api/tables", function(req, res) {
        // Server will respond to user by letting them know if they have a table or not. It will be sending the value *true* 
        if(tableData.length < 5) {
            tableData.push(req.body);
            res.json(true);
        }
        else {
            waitingListData.push(req.body);
            res.json(false);
        }
    });


};