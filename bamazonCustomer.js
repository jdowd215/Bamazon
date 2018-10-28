require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");

//create connection to mysql
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.DATABASE_PASSWORD,
  database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);

    //display items for sale from products table in bamazon_db in mysql
    connection.query("SELECT item_id, product_name, price FROM products", function(err, result) {
        if (err) throw err;
        console.log(result);
        purchaseItem();
        });
    });    

//using inquirer, prompt user with 2 messages
//1. ask for the id of the product the would like to buy
//2. ask how many units of the product they would like to buy
function purchaseItem();
    inquirer
        .prompt([
            {
            type: "input",
            name: "item_id",
            message: "What is the id # of the item you would like to purchase?" 
            }
        ]);




