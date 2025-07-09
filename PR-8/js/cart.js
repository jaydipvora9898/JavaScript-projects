// Add to Cart

function loadCartData() {
    let cartData = JSON.parse(localStorage.getItem("CartProducts")) || [];
    let result = "";

    cartData.forEach((product, index) => {
        result += `
            <div class="cart-item" data-index="${index}">
                <div class="cart-item-image">
                    <img src="${product.Product_image}" alt="${product.Product_name}">
                </div>
                <div class="cart-item-details">
                    <h3 class="cart-item-title">${product.Product_name}</h3>
                    <div class="cart-item-stock">In stock</div>
                    <div class="cart-item-brand">${product.Brand || 'KOORSI & Company'}</div>
                    <div class="cart-item-style"><strong>Style Name:</strong> ${product.Style || 'Light Grey'}</div>
                    <div class="cart-item-style"><strong>Size:</strong> ${product.Size || 'Set of 2'}</div>
                    
                    <div class="cart-item-actions">
                        <a href="#">Save for later</a>
                        <a href="#">See more like this</a>
                        <a href="#">Share</a>
                    </div>
                </div>
                <div class="cart-item-delete">      
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `;
    });

    document.querySelector(".cart-items-container").innerHTML = result;
    
    // Update cart summary
    updateCartSummary(cartData);

    // Add event listeners to delete buttons
    document.querySelectorAll(".cart-item-delete").forEach((button) => {
        button.addEventListener("click", removeProduct);
    });
}

function updateCartSummary(cartData) {
    const subtotal = cartData.reduce((sum, product) => {
        const priceValue = product.Price ? parseFloat(product.Price.replace(/[^0-9.]/g, '')) : 0;
        return sum + priceValue;
    }, 0);
    
    const itemCount = cartData.length;
    const savings = itemCount * 99; // Assuming ₹99 savings per item as in screenshot
    const mrp = subtotal + savings;
    
    // Update DOM elements
    document.querySelector(".item-count").textContent = itemCount;
    document.querySelector(".subtotal-price").textContent = `₹${subtotal.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
    
    if (itemCount > 0) {
        document.querySelector(".savings-display").classList.remove("d-none");
        document.querySelector(".savings-amount").textContent = `₹${savings.toLocaleString('en-IN', {minimumFractionDigits: 2})} ✓`;
        
        document.querySelector(".mrp-display").classList.remove("d-none");
        document.querySelector(".mrp-price").textContent = `₹${mrp.toLocaleString('en-IN', {minimumFractionDigits: 2})}`;
        
        document.querySelector(".deal-display").classList.remove("d-none");
    } else {
        document.querySelector(".savings-display").classList.add("d-none");
        document.querySelector(".mrp-display").classList.add("d-none");
        document.querySelector(".deal-display").classList.add("d-none");
    }
}

function removeProduct(event) {
    let cartData = JSON.parse(localStorage.getItem("CartProducts")) || [];
    let productCard = event.target.closest(".cart-item");
    let index = productCard.dataset.index;

    cartData.splice(index, 1);
    localStorage.setItem("CartProducts", JSON.stringify(cartData));

    loadCartData();
}

function placeOrder() {
    // Clear the cart
    localStorage.removeItem("CartProducts");
    
    // Show confirmation modal
    const modal = new bootstrap.Modal(document.getElementById('orderConfirmationModal'));
    modal.show();
    
    // Reload cart to show empty state
    loadCartData();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadCartData();
    
    // Add event listener for place order button
    document.getElementById('place-order-btn').addEventListener('click', placeOrder);
    
    // Add event listener for continue shopping button
    document.getElementById('continue-shopping-btn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});