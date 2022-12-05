const cartImg = localStorage.getItem("cartImg");
const cartTitle = localStorage.getItem("cartTitle");
const cartPrice = localStorage.getItem("cartPrice");

if (cartImg == null) {
  document.getElementsByClassName("cart-img")[0].src = "../images/no-img.png";
  document.getElementsByClassName("cart-title")[0].innerHTML = "No Product";
  document.getElementsByClassName("cart-price")[0].innerHTML = 0.0;
} else {
  document.getElementsByClassName("cart-img")[0].src = cartImg;
  document.getElementsByClassName("cart-title")[0].innerHTML = cartTitle;
  document.getElementsByClassName("cart-price")[0].innerHTML = cartPrice;
}
