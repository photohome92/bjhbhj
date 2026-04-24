let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ================= PRODUCTS ================= */
const products = [
{name:"Mirror Frames",price:2000,imgs:["images/mirrorframes1.jpg","images/mirrorframes2.jpg"],desc:"Premium mirror frame"},
{name:"Magic Mirror Frames",price:2000,imgs:["images/magicmirror1.jpg","images/magicmirror2.jpg"],desc:"Magic mirror frame"},
{name:"White Mug",price:799,imgs:["images/whitemug1.jpg","images/whitemug2.jpg"],desc:"Custom printed mug"},
{name:"Colour Mugs",price:1099,imgs:["images/colormug1.jpg","images/colormug2.jpg"],desc:"Color mugs"},
{name:"Heart Mug",price:1199,imgs:["images/heartmug1.jpg","images/heartmug2.jpg"],desc:"Heart mug"},
{name:"Magic Mug",price:1199,imgs:["images/magicmug1.jpg","images/magicmug2.jpg"],desc:"Magic mug"},
{name:"White Shirt",price:799,imgs:["images/whiteshirt1.jpg","images/whiteshirt2.jpg"],desc:"Printed shirt"},
{name:"Colour Shirt",price:1499,imgs:["images/colorshirt1.jpg","images/colorshirt2.jpg"],desc:"Color shirt"},
{name:"Flyers",price:699,imgs:["images/flyers1.jpg","images/flyers2.jpg"],desc:"Marketing flyers"},
{name:"Visiting Cards",price:1999,imgs:["images/visitingcard1.jpg","images/visitingcard2.jpg"],desc:"Business cards"},
{name:"Canvas Print",price:1399,imgs:["images/canvas1.jpg","images/canvas2.jpg"],desc:"Canvas print"},
{name:"Framed Canvas",price:1599,imgs:["images/framedcanvas1.jpg","images/framedcanvas2.jpg"],desc:"Framed canvas"},
{name:"Birthday Cards",price:499,imgs:["images/birthdaycard1.jpg","images/birthdaycard2.jpg"],desc:"Birthday cards"},
{name:"Lunch Box",price:699,imgs:["images/lunchbox1.jpg","images/lunchbox2.jpg"],desc:"Lunch box"},
{name:"Water Bottle",price:899,imgs:["images/waterbottle1.jpg","images/waterbottle2.jpg"],desc:"Water bottle"},
{name:"Temp Bottle",price:1499,imgs:["images/tempbottle1.jpg","images/tempbottle2.jpg"],desc:"Temp bottle"},
{name:"Wallet",price:1299,imgs:["images/wallet1.jpg","images/wallet2.jpg"],desc:"Wallet"},
{name:"Keyring",price:499,imgs:["images/keyring1.jpg","images/keyring2.jpg"],desc:"Keyring"},
{name:"Chain",price:499,imgs:["images/chain1.jpg","images/chain2.jpg"],desc:"Chain"},
{name:"Ring",price:245,imgs:["images/ring1.jpg","images/ring2.jpg"],desc:"Ring"},
{name:"Album",price:999,imgs:["images/album1.jpg","images/album2.jpg"],desc:"Album"},
{name:"Printed Album",price:9999,imgs:["images/printedalbum1.jpg","images/printedalbum2.jpg"],desc:"Printed album"},
{name:"Cushion",price:749,imgs:["images/cushion1.jpg","images/cushion2.jpg"],desc:"Cushion"},
{name:"Magic Cushion",price:999,imgs:["images/magiccushion1.jpg","images/magiccushion2.jpg"],desc:"Magic cushion"},
{name:"Phone Cover",price:999,imgs:["images/phonecover1.jpg","images/phonecover2.jpg"],desc:"Phone cover"},
{name:"Small Frame",price:899,imgs:["images/smallframe1.jpg","images/smallframe2.jpg"],desc:"Small frame"},
{name:"LED Frame",price:2499,imgs:["images/ledframe1.jpg","images/ledframe2.jpg"],desc:"LED frame"}
];

/* ================= LOAD ================= */
window.onload = function(){

let grid = document.getElementById("productGrid");

/* HOME PAGE */
if(grid){
products.forEach((p,i)=>{
grid.innerHTML += `
<div class="card" onclick="openProduct(${i})">

<img src="${p.imgs[0]}" onerror="this.src='images/default.jpg'">

<h3>${p.name}</h3>
<p>Rs ${p.price}</p>

<button onclick="event.stopPropagation(); addToCart('${p.name}',${p.price})">
Add To Cart
</button>

</div>
`;
});
}

/* PRODUCT PAGE */
let id = localStorage.getItem("product");

if(id !== null && products[id]){

let p = products[id];

document.getElementById("name").innerText = p.name;
document.getElementById("desc").innerText = p.desc;
document.getElementById("price").innerText = "Rs " + p.price;

window.images = p.imgs;
window.index = 0;

showImg();
}

updateCart();

};

/* ================= FUNCTIONS ================= */

function openProduct(id){
localStorage.setItem("product",id);
window.location.href="product.html";
}

function addToCart(name,price){
cart.push({name,price});
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
alert("Added 🛒");
}

function addToCartSingle(){
let id = localStorage.getItem("product");
let p = products[id];

cart.push({name:p.name,price:p.price});
localStorage.setItem("cart",JSON.stringify(cart));
updateCart();
alert("Added 🛒");
}

/* CART COUNT */
function updateCart(){
let c = JSON.parse(localStorage.getItem("cart")) || [];
let el = document.getElementById("cartCount");
if(el) el.innerText = c.length;
}

/* SLIDER */
function showImg(){
let img = document.getElementById("mainImg");
if(img){
img.src = window.images[window.index];
img.onerror = () => img.src = "images/default.jpg";
}
}

function nextImg(){
window.index = (window.index + 1) % window.images.length;
showImg();
}

function prevImg(){
window.index = (window.index - 1 + window.images.length) % window.images.length;
showImg();
}