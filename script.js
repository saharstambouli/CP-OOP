// Class for Product
class product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// Class for ShoppingCart
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    // Method to calculate the total price of the item
    calculateTotalPrice() {
        return this.product.price * this.quantity;
    }
}

// Example 
const product1 = new product(1, 'Telephone', 1000);
const cart1 = new ShoppingCartItem(product1, 2);

console.log( "TotalPrice for product",cart1. calculateTotalPrice()); 



//Create another object class for the shopping cart which contains an array of ShoppingCartItem instances. 

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        const item = new ShoppingCartItem(product, quantity);
        this.items.push(item);
    }

    // Method to calculate the total price of all items in the cart
    calculateTotalPrice() {
        return this.items.reduce((total, item) => total + item.calculateTotalPrice(), 0);
    }

    // Method to get the total number of items in the cart
    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

      // Method to remove an item from the cart
      removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

        // Method to display all items in the cart
        displayItems() {
            this.items.forEach(item => {
                console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: ${item.calculateTotalPrice()}`);
            });
        }
}


//Test

// Create some products
const product2 = new product(2, 'Laptop', 1000);
const product3 = new product(3, 'Phone', 500);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product2, 2); 
cart.addItem(product3, 3);

// 1 Test  the total price of the cart
console.log("Total Price for all products",cart.calculateTotalPrice()); 



// 2  Test  the cart
console.log('Cart Items:');
cart.displayItems();

// Remove an item from the cart
cart.removeItem(2);

// Display the cart after removal
console.log('Cart Items after removal:');
cart.displayItems();
