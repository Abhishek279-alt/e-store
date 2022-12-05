let featuredProducts = [
  {
    imgUrl: "../images/men/red-checkerd-shirt.jpg",
    title: "Men - Stylish red checkerd shirt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/men/grey-t-shirt.jpg",
    title: "Men - Grey t-shirt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/men/green-hoodie.jpg",
    title: "Men - Stylish green hoodie",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/men/slim-fit-jeans.webp",
    title: "Men - Slim fit denim jeans in blue",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/women/trendy-summer-dress.webp",
    title: "Women - Trendy summer dress",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/women/salwar-suit.jpg",
    title: "Women - Red salwar suit, traditional outfit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/women/loose-jeans.jpg",
    title: "Women - Denim jeans, loose fit",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/women/long-printed-skirt.jpg",
    title: "Women - Long printed skirt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/kids/kids-4.jpg",
    title: "Girls - Pink dress with dots",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/kids/kids-5.jpg",
    title: "Boys - Multicoloured striped long sleeve shirt",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/kids/kids-6.jpeg",
    title: "Boys - Blue checkerd shirt for summer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
  {
    imgUrl: "../images/kids/kids-8.jpg",
    title: "Girls - Orange t-shirt with white dungarees",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 999.99,
  },
];

// Login Page code

function checkLogin() {
  let userEmail = document.getElementById("loginEmail").value;
  let userPassword = parseInt(document.getElementById("loginPassword").value);

  if (userEmail === "admin@admin.com" && userPassword === 123456) {
    document.getElementById("login-success").style.display = "block";
  } else {
    document.getElementById("login-fail").style.display = "block";
  }
}

// Featured Products code

let featuredImages = document.getElementsByClassName("card-img-top");
let featuredTitle = document.getElementsByClassName("card-title");
let featuredPrice = document.getElementsByClassName("card-price");
let featuredDescription = document.getElementsByClassName("card-text");
let addItemButton = document.getElementsByClassName("featured-btn");

featuredProducts.forEach((element, i) => {
  featuredImages[i].src = element.imgUrl;
  featuredTitle[i].innerHTML = element.title;
  featuredPrice[i].innerHTML = `&#8377; ${element.price}`;
  featuredDescription[i].innerHTML = element.desc;
  addItemButton[i].addEventListener("click", () => {
    localStorage.setItem("cartImg", element.imgUrl);
    localStorage.setItem("cartTitle", element.title);
    localStorage.setItem("cartPrice", element.price);
  });
});
