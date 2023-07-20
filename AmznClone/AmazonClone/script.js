// Select the search input element and log its value to the console
const searchInput = document.querySelector('.search-input');
console.log(searchInput.value);

// Change the text content of the "Cart" element
const cartText = document.querySelector('.header-cart p');
cartText.textContent = 'My Cart';

// Add a click event listener to the "Sign in" button
const signInButton = document.querySelector('.section-1-column button');
signInButton.addEventListener('click', function() {
    console.log('Sign in button clicked');
});

// Hide the "Related to items you've viewed" section
const relatedItemsSection = document.querySelector('.section-2:nth-of-type(1)');
relatedItemsSection.style.display = 'none';

// Add a class to the first product card in the "Best Sellers in Grocery & Gourmet Foods" section
const firstProductCard = document.querySelector('.section-2:nth-of-type(2) .product-card:first-child');
firstProductCard.classList.add('highlight');

// Get the text content of the first product price
const firstProductPrice = document.querySelector('.product-detail-card:first-child .product-price');
console.log(firstProductPrice.textContent);

// Change the image source of the second product card in the "Related to items you've viewed" section
const secondRelatedItemImg = document.querySelector('.section-2:nth-of-type(1) .product-card:nth-child(2) img');
secondRelatedItemImg.src = 'new-image-url.jpg';

// Toggle a class on the "Sign in" button when clicked
signInButton.addEventListener('click', function() {
    signInButton.classList.toggle('active');
});

// Change the text of the "See more" links in the first section to "Shop now"
const seeMoreLinks = document.querySelectorAll('.section-1-column p');
seeMoreLinks.forEach(function(link) {
    link.textContent = 'Shop now';
});

// Add a class to the footer element
const footer = document.querySelector('footer');
footer.classList.add('footer-style');
