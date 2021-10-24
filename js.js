
// Open Overlay on Cart Button (Not Implemented

// function openCart() {
//  document.getElementById("overlay").style.display = "inline-flex";
// }

// function closeCart() {
//  document.getElementById("overlay").style.display = "none";
// }

//Adjust Count

var counter = 1;

function addQuantity() {
    counter = counter + 1;
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
    return counter;
   
}

function removeQuantity() {
    counter = counter - 1;
    if (counter < 1) {
        counter = 1;
    }
    document.getElementById("counter").innerHTML = counter;
    console.log(counter);
    return counter;
}

//Calculate Price

function calculatePrice() {
    var price = counter * 50;
    var pricestring = price.toString;
    document.getElementById("cart-price-text").innerHTML = price;
}

//Change Picture Display

function displayPicture(box){
	
	var pillowPicture = new Array(5);
        
	pillowPicture[0] = "assets/bombay.jpg";
	pillowPicture[1] = "assets/Amsterdam.jpg";
	pillowPicture[2] = "assets/silk linen 2.jpg";
	pillowPicture[3] = "assets/whitepillow.jpg";
	document.getElementById('product-image').src = pillowPicture[parseInt(box.value)];
	}
        
        
//Change the Number in Cart
function displayCartNumber() {
    if (counter===0) {
       document.getElementById('shopping-cart-number').style.display='none';
    }
    if (counter===1) {
    document.getElementById('shopping-cart-number').src="assets/1.png";
    }
    if (counter===2) {
        document.getElementById('shopping-cart-number').src="assets/2.png";
    }
    if (counter===3) {
        document.getElementById('shopping-cart-number').src="assets/3.png";
    }
    if (counter===4) {
        document.getElementById('shopping-cart-number').src="assets/more.png";
    }
    document.getElementById('shopping-cart-number').style.display='block';
}
   
