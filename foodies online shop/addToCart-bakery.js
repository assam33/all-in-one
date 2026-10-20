// creating array and assign values to the array (dynamic creating multiple cards) 
let items = [
    {img: "assets/images/burger1.webp",name: "burger1",price: 350},
    {img: "assets/images/burger2.webp",name: "burger2",price: 400},
    {img: "assets/images/burger3.webp",name: "burger3",price: 550},
    {img: "assets/images/burger4.webp",name: "burger4",price: 600},
    {img: "assets/images/burger1.webp",name: "burger1",price: 350},
    {img: "assets/images/burger2.webp",name: "burger2",price: 400},
    {img: "assets/images/burger3.webp",name: "burger3",price: 550},
    {img: "assets/images/burger4.webp",name: "burger4",price: 600},   
    {img: "assets/images/burger1.webp",name: "burger1",price: 350},
    {img: "assets/images/burger2.webp",name: "burger2",price: 400},
    {img: "assets/images/burger3.webp",name: "burger3",price: 550},
    {img: "assets/images/burger4.webp",name: "burger4",price: 600},
    {img: "assets/images/burger1.webp",name: "burger1",price: 350},
    {img: "assets/images/burger2.webp",name: "burger2",price: 400},
    {img: "assets/images/burger3.webp",name: "burger3",price: 550},
    {img: "assets/images/burger4.webp",name: "burger4",price: 600}

]
// dynamicaly ading the items into the cards section
let product = document.querySelector('.bakery-cards');
items.forEach((productss) => {
    product.innerHTML += `
    <div class="card">
        <img src="${productss.img}">
        <p>${productss.name}</p>
        <p>${productss.price}</p>
        <button onclick='addToCart(this)'>Add to cart</button>
    </div>
    `;
})


// add items to cart box an also sum of all items
let priceCount = document.querySelector('.pcount');
let totalPrice = 0;
let cartItems = document.querySelector('.cart-box');

let addToCart = (cbutton) =>{
    let cardElements = cbutton.parentElement.children;
// parseFloat is use to make string into integer of floating value
    let currentPrice = parseFloat(cardElements[2].innerText);
    totalPrice += currentPrice;
    priceCount.innerText = 'Rs' + totalPrice + '.00';
cartItems.innerHTML += `
<div class="in-cart">
    <img src="${cardElements[0].src}">
    <h3>${cardElements[1].innerText}</h3>
    <p class="item-price">${cardElements[2].innerText}</p>
    <div class="qty-box">
        <button onclick="decreaseQty(this)">-</button>
        <span class="qty">1</span>
        <button onclick="increaseQty(this)">+</button>
    </div>

    <button class="delbtn" onclick='removeItem(this)'>Del</button>
</div>
`;
}

let increaseQty = (btn) =>{

    let parent = btn.parentElement.parentElement;

    let qtyElement = btn.parentElement.children[1];
    let qty = parseInt(qtyElement.innerText);

    qty++;
    qtyElement.innerText = qty;

    let price = parseFloat(parent.children[2].innerText);

    totalPrice += price;

    priceCount.innerText = 'Rs ' + totalPrice + '.00';
}

let decreaseQty = (btn) =>{

    let parent = btn.parentElement.parentElement;

    let qtyElement = btn.parentElement.children[1];
    let qty = parseInt(qtyElement.innerText);

    if(qty > 1){

        qty--;
        qtyElement.innerText = qty;

        let price = parseFloat(parent.children[2].innerText);

        totalPrice -= price;

        priceCount.innerText = 'Rs ' + totalPrice + '.00';
    }
}

// remove items from cart box and also delete price from total
let removeItem = (dell) =>{

    let parent = dell.parentElement;

    let price = parseFloat(parent.children[2].innerText);
    let qty = parseInt(parent.querySelector(".qty").innerText);

    totalPrice -= price * qty;

    priceCount.innerText = 'Rs ' + totalPrice + '.00';

    parent.remove();
}

                       // END
{/* <style> */}

{/* .burger{
    width: 100%;
    height: 100%;
    background-color: black;
} */}
{/* .burger h1{
    text-align: center;
    padding: 50px;
    background-color: black;
} */}
{/* .burger-items{
    width: 100%;
    height: 100%;
    background-color: #161616;;
    display: grid;
    grid-template-columns: 1fr 400px;
} */}
{/* .burger-cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    gap: 0px;
    row-gap: 10px;
} */}
{/* .burger-cards .card{
    width: 220px;
    height: 391px;
    display: flex;
    flex-direction: column;
    gap: 10px;
} */}
{/* .burger-cards .card img{
    width: 100%;
    height: 269px;
    object-fit: cover;
} */}
{/* .burger-cards .card .types-price{
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 8px;
} */}
{/* .burger-cards .card p{
    width: 100%;
    font-size: 14px;
    text-align: center;
    font-weight: bold;
} */}
{/* .burger-cards .card button{
    width: 100%;
    height: 44px;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
} */}

/* add to cart wala box  */
{/* .cart-section h1{
    background-color: #2c0202;
} */}
/* add item in cart  */
{/* .cart-section .cart-box .in-cart{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
} */}
{/* .cart-section .cart-box .in-cart img{
    width: 50px;
    height: 50px;
} */}
/* number counter  */
{/* .qty-box{
    display: flex;
    gap: 10px;
} */}
{/* .qty-box button{
    padding:  0 10px;
} */}
{/* .qty-box, .qty-box button{
    background-color: #2c0202;
    font-size: 20px;
} */}
/* delete from cart  */
{/* .delbtn{
    display: flex;
    justify-content: center;
    background-color: red;
    padding: 3px 10px;
    font-size: 15px;
    font-weight: bold;
} */}
/* total price section  */
{/* .price-total{
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    border-top: 3px solid black;
    margin-top: 10px;
} */}
{/* </style> */}