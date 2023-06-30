

//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");
//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};

ready()
//cart warking js
// if(document.readyState =="loading"){
//     document.addEventListener("loading", ready);
// }else{
//     ready();
// }
//making function
function ready() {
    //remove items from cart
    var reomveCartButtons = document.getElementById('card_remove');
    console.log(reomveCartButtons);
    // for (var i = 0; i < reomveCartButtons.length; i++) {
    //     var button = reomveCartButtons[i];
    //     button.addEventListener("click", removeCartItem);
    // }
    reomveCartButtons.addEventListener("click", removeCartItem);
    //quantity changes
    var quantityInputs = document.getElementsByClassName("cart-quantity")
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener("change", quantityChanged);
    }


}
//remove items for cart
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parenElement.remove();
    updatetotal();
}
//quantity changes
function quantityChanged(event) {
    var input = event.target
    if (NaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}
//update total 
function updatetotal() {
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityElement.value;
        total = total + (price * quantity);
        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}

