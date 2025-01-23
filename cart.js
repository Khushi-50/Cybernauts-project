// Global array to hold the data of all clicked products
let selectedProducts = [];
let buttonclick=false;
// Function to handle image clicks
function handleImageClick(event) {
    const imageElement = event.target;  // Get the clicked image element
    
    // Retrieve product data from the clicked image
    const name = imageElement.getAttribute('data-name');
    const price = imageElement.getAttribute('data-price');
    const imgSrc = imageElement.getAttribute('data-img');
    
    // Create a product object
    const selectedProduct = {
        name: name,
        price: price,
        imgSrc: imgSrc
    };

    // Add the selected product to the global array
    selectedProducts.push(selectedProduct);

    // Optionally, give feedback that an item was selected
    console.log(`Selected Product: ${name}, ${price}, ${imgSrc}`);
    console.log('Current selected products:', selectedProducts);
}

// Attach event listeners to all images
document.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', handleImageClick);
});
window.onload = function() {
    if(!buttonclick){
        localStorage.removeItem('cart');
    }
    // Clear the cart from localStorage when the page loads
    
}

 


// Function to handle adding the selected products to the cart
function addToCart() {
    buttonclick=true;
    // Retrieve the existing cart from localStorage or initialize a new array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // localStorage.getItem('cart') returns null (key doesn't exist), 
    // the whole expression will result in an empty array 
    // because null || [] 
    // evaluates to [].
//he JSON.parse() function in JavaScript is used to convert
//  a JSON string into a JavaScript object or array. 


    // Add all selected products to the cart
    cart.push(...selectedProducts);

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Optionally, provide feedback to the user
    alert(`${selectedProducts.length} products have been added to the cart!`);

    // Clear the selected products array after adding to the cart
    selectedProducts = [];
}

// Attach event listener to the "Add to Cart" button
document.getElementById('add-to-cart').addEventListener('click', addToCart);
