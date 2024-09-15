// Inventory Array of Product Objects
let inventory = [
    { name: "candy",
        price: 5,
        quantity: 200,
        lowStockLevel: 100,
    }, // Product 1, in stock
    { name: "popcorn",
        price: 10,
        quantity: 300,
        lowStockLevel: 70,
    }, // product 2, in stock
    { name: "radio",
        price: 50,
        quantity: 100,
        lowStockLevel: 20,
    }, // product 3, in stock
    { name: "hat",
price: 15,
quantity: 20,
lowStockLevel: 50,
    }, // product 4, low stock
    {name: "lipstick",
        price: 30,
        quantity: 100,
lowStockLevel: 150
    } // product 5, low stock
]; 

// Create a Function to Display Product Details

function displayProductDetails (inventory) {
    let stockOfProducts = inventory.lowStockLevel >= inventory.quantity ? "Low Stock": "In Stock"
// ternary operator because it was easier to define a name 'stockOfProducts' to use later 
    console.log(` ${inventory.name} is priced at $${inventory.price} with current quantity of ${inventory.quantity} which means it is ${stockOfProducts} `); // created the phrase I want it to log as 
return displayProductDetails; // returns function
};

inventory.forEach(inventory => displayProductDetails(inventory)) // uses forEach function to iterate over the array and log the products in the phrase prepared in the function. Expected output example: Lipstick is priced at $30 with current quantity of 100 which means it is Low Stock
    
// Create a Function to Update Product Stock After Sales
function updateStock(product) { 
    let newProductQuantity = product.quantity -= unitsSold // create variable to update the quantity of products
   // use if-else to update the message based on new quantity
    if (newProductQuantity > inventory.lowStockLevel) {
        console.log("In Stock") ;
    } else if (lowStockLevel > newProductQuantity > 0)
    console.log(`Low Stock`) ;
    else { console.log("outOfStock")
    return updateStock // return the function
} };
