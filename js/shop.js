

// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 4.7619
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 33.3333
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    products.forEach(element => {
        if(element.id == id){
            cartList.push(element)
        }
    });

    generateCart()
    applyPromotionsCart()
    calculateTotal()
}

// Exercise 2
function cleanCart() {
    cartList = []
    cart = []
    printCart()
    calculateTotal()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let totalprice = 0
    let totalquantity = 0
    cart.forEach(element => {
        if ((element.id == 1) && (element.quantity >= 3)){
            totalprice += element.subtotalWithDiscount
        } else if((element.id == 3) && (element.quantity >= 10)){
            totalprice += element.subtotalWithDiscount
        } else {
            totalprice += element.subtotal
        }
        totalquantity += element.quantity
    });
    document.getElementById('total_price').innerHTML = totalprice
    document.getElementById('count_product').innerHTML = totalquantity

}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = []

    cartList.forEach(element => {
        let cartElement = cart.find(elem => elem.id == element.id) ?? null

        if(cartElement != null) {
            cartElement.quantity ++
            cartElement.subtotal = cartElement.price * cartElement.quantity

            let index = cart.indexOf(cartElement)
            cart.splice(index, 1)

            cart.push(cartElement)

        } else {
            cart.push(
                {
                    id: element.id,
                    name: element.name,
                    price: element.price,
                    type: element.type,
                    quantity: 1,
                    offer: element.offer,
                    subtotal: element.price,
                    subtotalWithDiscount: 0
                }
            )
        }
    });
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    
    cart.forEach(element => {

        if ((element.id == 1) && (element.quantity >= 3)){
            
            element.subtotalWithDiscount = Number((element.subtotal - (element.subtotal * (element.offer.percent / 100))).toFixed(2)) 

            let newElement = element
            let index = cart.indexOf(element)
            cart.splice(index, 1, newElement)

        }
        if((element.id == 3) && (element.quantity >= 10)){
            element.subtotalWithDiscount = Number((element.subtotal - (element.subtotal * (element.offer.percent / 100))).toFixed(2))

            let newElement = element
            let index = cart.indexOf(element)
            cart.splice(index, 1, newElement)

        }
    });
}

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let print = cart.map(function(elem){
        let discount = 0
        if((elem.subtotalWithDiscount == 0) || ((elem.id == 1) && (elem.quantity < 3)) || ((elem.id == 3) && (elem.quantity < 10))){
            discount = elem.subtotal
        } else {
            discount = elem.subtotalWithDiscount
        }
        return '<tr>' +
                    '<th scope="row">' + elem.name + '</th>' +
                    '<td>' + elem.price + '</td>' +
                    '<td>' + elem.quantity + '</td>' +
                    '<td>' + discount  + '</td>' +
                    '<td><i class="fa fa-trash" aria-hidden="true" onclick="removeFromCart(' + elem.id + ')"></i></td>' +
                '</tr>'
    })
    document.getElementById('cart_list').innerHTML = print.join('')

}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    products.forEach(element => {
        if(element.id == id){
            let cartElement = cart.find(elem => elem.id == element.id) ?? null

            if(cartElement != null) {
                cartElement.quantity ++
                cartElement.subtotal = cartElement.price * cartElement.quantity

                let index = cart.indexOf(cartElement)
                cart.splice(index, 1)

                cart.push(cartElement)

            } else {
                cart.push(
                    {
                        id: element.id,
                        name: element.name,
                        price: element.price,
                        type: element.type,
                        quantity: 1,
                        offer: element.offer,
                        subtotal: element.price,
                        subtotalWithDiscount: 0
                    }
                )
            }
        }
    });
    applyPromotionsCart()
    calculateTotal()
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let cartElement = cart.find(elem => elem.id == id)
    
    if(cartElement.quantity >= 1){
        cartElement.quantity--
        cartElement.subtotal = cartElement.price * cartElement.quantity

        let index = cart.indexOf(cartElement)
        cart.splice(index, 1)

        cart.push(cartElement)
    }
    if(cartElement.quantity == 0){
        let index = cart.indexOf(cartElement)
        cart.splice(index, 1)
    }

    applyPromotionsCart()
    printCart()
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}