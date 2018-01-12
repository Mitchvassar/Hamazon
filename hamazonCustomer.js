//Dependencies
var inquirer = require("inquirer");
var mysql = require("mysql");

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,

	// Your username
	user: "root",

	// Your password
	password: "lol123",
	database: "hamazon_db"
});

function displayInventory() {
	// console.log("___ENTER displayInventory___");

	// Construct the db query string
	queryStr = "SELECT * FROM products";

	// Make the db query
	connection.query(queryStr, function(err, inventory) {
		if (err) throw err;

		console.log("                                        Current Inventory ");
		console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

		var current = "";
		for (var i = 0; i < inventory.length; i++) {
			current = "";
            current += "Item ID: " + inventory[i].item_id + "  //  ";
            current += "Product Name: " + inventory[i].product_name + "  //  ";
			current += "Genre: " + inventory[i].genre_name + "  //  ";
			current += "Price: $" + inventory[i].price + "\n";

			console.log(current);
		}

          console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
          console.log("                                        End of List ");
          console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

	  	//Prompt the user for game and amount they would like to order
	  	startPurchase();
	})
}

// start is the beginning prompt for the user"s purchase
function startPurchase() {

	// prompts user for item"s ID
	inquirer.prompt([
		{
			type: "input",
			name: "item_id",
			message: "Please enter a valid ID for the game you are looking for.",
		},
		{
			type: "input",
			name: "userAmount",
			message: "Would you like more than one? Enter the amount.",
		}
	]).then(function(userInput) {
		var game = userInput.item_id;
		var userAmount = userInput.userAmount;

		// query the DB to make sure there are enough
		var queryDb = "SELECT * FROM products WHERE ?";

		connection.query(queryDb, {item_id: game}, function(err, res) {
            if (err) throw err;
            
			if (res.length === 0) {
				console.log("ERROR: Invalid Item ID. Please select a valid Item ID.");
				displayInventory();

			} else {
				var videoGame = res[0];

				// If the quantity requested by the user is in stock
				if (userAmount <= videoGame.stock_quantity) {
					console.log("In stock!");

					//Updates inventory
					var updateQueryDb = "UPDATE products SET stock_quantity = " + (videoGame.stock_quantity - userAmount) + " WHERE item_id = " + game;

					connection.query(updateQueryDb, function(err, data) {
						if (err) throw err;

						console.log("Order placed! Your total is $" + videoGame.price * userAmount);
						console.log("Thank you for your patronage!");
						// End the db connection
						connection.end();
					})
				} else {
					console.log("Error: Out of Stock");
					displayInventory();
				}
			}
		})
	})
}

displayInventory();