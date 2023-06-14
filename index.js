const btnCart = document.querySelector('.container-icon')
const containerCartProducts = document.querySelector('.container-cart-products') 

btnCart.addEventListener('click', () => {containerCartProducts.classList.toggle('hidden-cart')  
})

function toggleProductos() {
    var productosDiv = document.getElementById("productos");
    var productosLink = document.getElementById("productos-link");
  
    if (productosLink.classList.contains("active")) {
      productosDiv.style.display = "none";
      productosLink.classList.remove("active");
    } else {
      productosDiv.style.display = "block";
      productosLink.classList.add("active");
    }
  }