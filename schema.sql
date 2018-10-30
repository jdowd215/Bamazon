DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL auto_increment,
product_name VARCHAR(30) NOT NULL,
department_name VARCHAR(30) NOT NULL,
price DECIMAL(10,2),
stock_quantity INT NOT NULL,
primary key (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Colored Pencils", "School Supplies", 3.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spiral Notebook", "School Supplies", 2.50, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Calculator", "School Supplies", 10.25, 33);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monster Truck", "Kids Toys", 19.99, 66);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Rocking Horse", "Kids Toys", 99.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Train Set", "Kids Toys", 59.25, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Curious George", "Kids Books", 5.75, 54);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sharks", "Kids Books", 9.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Monopoly", "Board Games", 15.0, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CandyLand", "Board Games", 13.99, 64);

SELECT * FROM products;
