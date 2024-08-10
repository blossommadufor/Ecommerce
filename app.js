// QUERY SELECTORS

const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");
const productButton = document.querySelector (".productButton");
const payment = document.querySelector (".payment");
const close = document.querySelector (".close");



const products = [
    {
        id: 1,
        title: "Air force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "/images/air.png",
            },
            {
                code: "dark blue",
                img: "/images/air2.png",
            },
        ],
    },

    {
        id: 2,
        title: "Jordan",
        price: 109,
        colors: [
            {
                code: "Red",
                img: "/images/jordan.png",
            },
            {
                code: "Green",
                img: "/images/jordan2.png",
            },
        ],
    },

    {
        id: 3,
        title: "Blazer",
        price: 125,
        colors: [
            {
                code: "Lightgray",
                img: "/images/blazer.png",
            },
            {
                code: "Green",
                img: "/images/blazer2.png",
            },
        ],
    },

    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "/images/crater.png",
            },
            {
                code: "Lightgray",
                img: "/images/crater2.png",
            },
        ],
    },

    {
        id: 5
        ,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "/images/hippie.png",
            },
            {
                code: "black",
                img: "/images/hippie2.png",
            },
        ],
    }
];

let choosenProduct = products[0]

menuItem.forEach((item,index) =>{
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        choosenProduct = products[index]
 
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        currentProductColors.forEach((color, index) =>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index) =>{
    size.addEventListener("click", () =>{
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor= "white";
            size.style.color= "black";
        });
        size.style.backgroundColor= "black";
        size.style.color= "white";
    })
})

productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
})

close.addEventListener("click", ()=>{
    payment.style.display = "none"
})


