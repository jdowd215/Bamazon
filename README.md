# Bamazon
A Node and MySQL storefront application that takes in orders from customers and depletes stock inventory

## Customer View Description
Running the bamazon.js file in node will display the MySQL products tab]le
![table-screenshot] (images/bamazon_1.PNG)

Using the Inquirer npm package, the application then prompts the user to select an item id from the items displayed that they would like to purchase

Inquirer then asks them the amount of items they would like to purchase

Finally, the application will return the total cost for the number of selected items and update the stock quantity in the table.  If there are not enough items ins stock, the customer will be alerted. 
![inquirer-screenshot-1] (images/bamazon_2.PNG)
![inquirer-screenshot-2] (images/bamazon_3.PNG)

Example of Bamazon being run in the terminal:
![bamazon-video] (images/bamazon_video)




