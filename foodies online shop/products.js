// ===============================
//  REUSABLE RENDER FUNCTION
// ===============================
function renderProducts(selector, items) {
    let container = document.querySelector(selector);

    if (!container) return; // prevent error if section not in HTML

    let html = "";

    items.forEach((item) => {
        html += `
        <div class="card">
            <img src="${item.img}">
            <p>${item.name}</p>
            <p>Rs ${item.price}</p>
            <button onclick="addToCart('${item.name}', ${item.price})">
                Add to cart
            </button>
        </div>
        `;
    });

    container.innerHTML = html;
}

// ===============================
//  PIZZA ITEMS
// ===============================
let pizzaItems = [
    {img: "assets/images/pizza (1).webp", name: "Pizza 1", price: 350},
    {img: "assets/images/pizza (2).webp", name: "Pizza 2", price: 400},
    {img: "assets/images/pizza (1).webp", name: "Pizza 3", price: 550},
    {img: "assets/images/pizza (2).webp", name: "Pizza 4", price: 350},
    {img: "assets/images/pizza (1).webp", name: "Pizza 5", price: 400},
    {img: "assets/images/pizza (2).webp", name: "Pizza 6", price: 550},
    {img: "assets/images/pizza (1).webp", name: "Pizza 7", price: 350},
    {img: "assets/images/pizza (2).webp", name: "Pizza 8", price: 400},
    {img: "assets/images/pizza (1).webp", name: "Pizza 9", price: 550},
    {img: "assets/images/pizza (2).webp", name: "Pizza 8", price: 400},
    {img: "assets/images/pizza (1).webp", name: "Pizza 9", price: 550},
    {img: "assets/images/pizza (2).webp", name: "Pizza 10", price: 600}
];

// ===============================
//  BURGER ITEMS
// ===============================
let burgerItems = [
    {img: "assets/images/burger1.webp", name: "Burger 1", price: 350},
    {img: "assets/images/burger2.webp", name: "Burger 2", price: 400},
    {img: "assets/images/burger3.webp", name: "Burger 3", price: 550},
    {img: "assets/images/burger4.webp", name: "Burger 4", price: 600},
    {img: "assets/images/burger1.webp", name: "Burger 5", price: 350},
    {img: "assets/images/burger2.webp", name: "Burger 6", price: 400},
    {img: "assets/images/burger3.webp", name: "Burger 7", price: 550},
    {img: "assets/images/burger4.webp", name: "Burger 8", price: 600},
    {img: "assets/images/burger1.webp", name: "Burger 9", price: 350},
    {img: "assets/images/burger2.webp", name: "Burger 10", price: 400},
    {img: "assets/images/burger3.webp", name: "Burger 11", price: 550},
    {img: "assets/images/burger4.webp", name: "Burger 12", price: 600}
];

// ===============================
//  SOUP ITEMS
// ===============================
let soupItems = [
    {img: "assets/images/soup1.webp", name: "Soup 1", price: 350},
    {img: "assets/images/soup2.webp", name: "Soup 2", price: 400},
    {img: "assets/images/soup3.webp", name: "Soup 3", price: 550},
    {img: "assets/images/soup4.webp", name: "Soup 4", price: 600},
    {img: "assets/images/soup1.webp", name: "Soup 5", price: 350},
    {img: "assets/images/soup2.webp", name: "Soup 6", price: 400},
    {img: "assets/images/soup3.webp", name: "Soup 7", price: 550},
    {img: "assets/images/soup4.webp", name: "Soup 8", price: 600},
    {img: "assets/images/soup1.webp", name: "Soup 9", price: 350},
    {img: "assets/images/soup2.webp", name: "Soup 10", price: 400},
    {img: "assets/images/soup3.webp", name: "Soup 11", price: 550},
    {img: "assets/images/soup4.webp", name: "Soup 12", price: 600},
];

// ===============================
//  SANDWICH ITEMS
// ===============================
let sandwitchItems = [
    {img: "assets/images/sandwitch1.webp", name: "Sandwich 1", price: 350},
    {img: "assets/images/sandwitch2.webp", name: "Sandwich 2", price: 400},
    {img: "assets/images/sandwitch1.webp", name: "Sandwich 3", price: 550},
    {img: "assets/images/sandwitch2.webp", name: "Sandwich 4", price: 350},
    {img: "assets/images/sandwitch1.webp", name: "Sandwich 5", price: 400},
    {img: "assets/images/sandwitch2.webp", name: "Sandwich 6", price: 550},
    {img: "assets/images/sandwitch1.webp", name: "Sandwich 7", price: 350},
    {img: "assets/images/sandwitch2.webp", name: "Sandwich 8", price: 400},
    {img: "assets/images/sandwitch1.webp", name: "Sandwich 9", price: 550},
    {img: "assets/images/sandwitch2.webp", name: "Sandwich 10", price: 350},
    {img: "assets/images/sandwitch1.webp", name: "Sandwich 11", price: 400},
    {img: "assets/images/sandwitch2.webp", name: "Sandwich 12", price: 600}
];
// ===============================
//  BAKERY ITEMS
// ===============================
let bakeryItems = [
    {img: "assets/images/bakery 1.avif", name: "bakery i-1", price: 350},
    {img: "assets/images/bakery 1.avif", name: "bakery i-2", price: 400},
    {img: "assets/images/bakery 1.avif", name: "bakery i-3", price: 550},
    {img: "assets/images/bakery 1.avif", name: "bakery i-4", price: 350},
    {img: "assets/images/bakery 1.avif", name: "bakery i-5", price: 400},
    {img: "assets/images/bakery 1.avif", name: "bakery i-6", price: 550},
    {img: "assets/images/bakery 1.avif", name: "bakery i-7", price: 350},
    {img: "assets/images/bakery 1.avif", name: "bakery i-8", price: 400},
    {img: "assets/images/bakery 1.avif", name: "bakery i-9", price: 550},
    {img: "assets/images/bakery 1.avif", name: "bakery i-10", price: 350},
    {img: "assets/images/bakery 1.avif", name: "bakery i-11", price: 400},
    {img: "assets/images/bakery 1.avif", name: "bakery i-12", price: 600}
];


// ===============================
//  ALL PRODUCTS OBJECT
// ===============================
let allProducts = {
    ".pizza-cards": pizzaItems,
    ".burger-cards": burgerItems,
    ".soup-cards": soupItems,
    ".sandwitch-cards": sandwitchItems,
    ".bakery-cards": bakeryItems
};

// ===============================
//  RENDER ALL SECTIONS
// ===============================
for (let key in allProducts) {
    renderProducts(key, allProducts[key]);
}
