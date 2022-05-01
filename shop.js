const productName = document.querySelectorAll(".product__name")
const productPrice = document.querySelectorAll(".price")
const btnsBuy = document.querySelectorAll(".btn-buy")

btnsBuy.forEach(btnBuy => {
    btnBuy.addEventListener("click", redirectWhatsapp)
})

function redirectWhatsapp(event) {
    if (event.target == btnsBuy[0]) {
        window.location.href = `http://wa.me/5547996864477?text=Eu+gostaria+de+comprar%3A+%0D%0A  _${encodeURI(productName[0].innerText)}_ %0D%0A *${productPrice[0].innerText}* `
    } 
    else {
        window.location.href = `http://wa.me/5547996864477?text=Eu+gostaria+de+comprar%3A+%0D%0A  _${encodeURI(productName[1].innerText)}_ %0D%0A *${productPrice[1].innerText}* `
    }
}