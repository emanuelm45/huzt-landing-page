const purpleShirt = document.querySelector("#purple-tee")
const redShirt = document.querySelector("#red-tee")
const purpleShirtFront = document.querySelector("#purple-tee-front")
const redShirtFront = document.querySelector("#red-tee-front")

function changeShirt() {
  setInterval(() => {
    purpleShirtFront.style.zIndex = 1
    purpleShirtFront.style.opacity = "100%"
    purpleShirt.style.opacity = "70%"
    redShirtFront.style.zIndex = 1
    redShirtFront.style.opacity = "100%"
    redShirt.style.opacity = "70%"
  }, 2000);
  
  setInterval(() => {
    purpleShirtFront.style.zIndex = -1
    purpleShirt.style.opacity = "100%"
    redShirtFront.style.zIndex = -1
    redShirt.style.opacity = "100%"
  }, 4000);
}

window.onload = changeShirt()