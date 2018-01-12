var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "lol123",
    database: "hamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts them to select a genre
function start() {
    inquirer
        .prompt({
            name: "pickGenre",
            type: "list",
            message: "What Genre of games would you like to choose from?",
            choices: ["SHOOTERS", "RTS", "RPG"]
        })
        .then(function (answer) {
            // runs different functions based on their choice
            if (answer.pickGenre.toUpperCase() === "SHOOTERS") {
                selectShooters();
            } else if (answer.pickGenre.toUpperCase() === "RTS") {
                selectRTS();
            } else {
                selectRPG();
            }
        });
}

// function to run if user picks Shooters genre
function selectShooters() {
    connection.query("SELECT * FROM products WHERE genre_name = 'shooters'", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([{
                    name: "selectGame",
                    type: "rawlist",
                    choices: function () {
                        var shootersArray = [];
                        for (var i = 0; i < results.length; i++) {
                            shootersArray.push(results[i].item_id)
                        }
                        return shootersArray;
                    },
                    message: "Pick your game!"
                }])
        }
    )}

function selectRTS() {
    connection.query("SELECT * FROM products WHERE genre_name = 'rts'", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([{
                    name: "selectGame",
                    type: "rawlist",
                    choices: function () {
                        var rtsArray = [];
                        for (var i = 0; i < results.length; i++) {
                            rtsArray.push(results[i].item_id)
                        }
                        return rtsArray;
                    },
                    message: "Pick your game!"
                }])
        }
    )}

function selectRPG() {
    connection.query("SELECT * FROM products WHERE genre_name = 'rpg'", function (err, results) {
            if (err) throw err;
            inquirer
                .prompt([{
                    name: "selectGame",
                    type: "rawlist",
                    choices: function () {
                        var rpgArray = [];
                        for (var i = 0; i < results.length; i++) {
                            rpgrray.push(results[i].item_id)
                        }
                        return rpgArray;
                    },
                    message: "Pick your game!"
                }])
        }
    )}