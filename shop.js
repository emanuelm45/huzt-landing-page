const productName = document.querySelector(".product__name")
const btnsBuy = document.querySelectorAll(".btn-buy")

btnsBuy.forEach(btnBuy => {
    btnBuy.addEventListener("click", redirectWhatsapp)
})

function redirectWhatsapp() {
    window.location.href = "http://wa.me/5547996864477?text=Eu+gostaria+de+comprar%3A+%0D%0A" + "*" + productName.textContent + "*"
}