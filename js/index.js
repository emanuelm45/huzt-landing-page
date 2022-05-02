const imgShop = document.querySelector("#img-shop")
const imgLookbook = document.querySelector("#img-lookbook")
const imgHuzt = document.querySelector("#img-huzt")

imgShop.addEventListener("click", () => {
    location.href = "./shop.html"
})

imgHuzt.addEventListener("click", () => {
    location.href = "./about.html"
})

imgLookbook.addEventListener("click", () => {
    location.href = "./lookbook.html"
})
