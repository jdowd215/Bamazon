require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

//create connection to mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});

//display items for sale from products table in bamazon_db in mysql    
var purchaseItem = function () {
    connection.query("SELECT item_id, product_name, department_name, price, stock_quantity FROM products", function (error, result) {
        if (error) throw error;
        var table = new Table({
            head: ["ID", "Product", "Department", "Price", "Stock Quantity"]
        });
        console.log("Items available for sale: ");
        for (var i = 0; i < result.length; i++) {
            table.push([result[i].item_id, result[i].product_name, result[i].department_name, result[i].price.toFixed(2), result[i].stock_quantity])
        }
        console.log(table.toString());


        // using inquirer, prompt user with 2 messages
        // 1. ask for the id of the product the would like to buy
        // 2. ask how many units of the product they would like to buy
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "itemId",
                    message: "What is the id # of the item you would like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }, {
                    type: "input",
                    name: "quantity",
                    message: "How many of this item would you like to purchase?",
                    validate: function (value) {
                        if (isNaN(value) == false) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                }
            // function to calculate cost of items to be purchased and the updated stock quantity
            ]).then(function (answer) {
                var choiceId = answer.itemId - 1;
                var productChoice = result[choiceId];
                var productQuantity = answer.quantity;
                if (productQuantity < productChoice.stock_quantity) {
                    console.log("Your total for " + " (" + answer.quantity + ")" + productChoice.product_name + " is: " + productChoice.price.toFixed(2) * productQuantity);
                    connection.query("UPDATE products SET ? WHERE ?", [{
                        stock_quantity: productChoice.stock_quantity - productQuantity
                    }, {
                        item_id: productChoice.item_id
                    }],
                        function (error, result) {
                            if (error) throw error;
                            purchaseItem();
                        }
                    );
                } else {
                    console.log("Sorry, insufficient quantity at this time.  There are only " + productChoice.stock_quantity + " available for purchase.");
                    purchaseItem();
                }
            })
    }
    )
}
purchaseItem();



    




