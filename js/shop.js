// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
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
        type: 'grocery'
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

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
/*function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for(let i=0;i<products.length;i++){
        if(products[i].id==id){
             // 2. Add found product to the cartList array
            cartList.push(products[i]);
        }         
    }   
    console.log(cartList);
}*/

// Exercise 2
function cleanCart() {
    /*cartList=[];
    console.log(cartList);*/
    cart=[];
    console.log(cart);
}

// Exercise 3
function calculateSubtotals() {
    // 1. Create a for loop on the "cartList" array
   
    for(let i=0;i<cart.length;i++) { 

        // 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
        if(cart[i].type=="grocery"){
            subtotal.grocery.value+=cart[i].price;
        }else if(cart[i].type=="beauty"){
            subtotal.beauty.value+=cart[i].price;
        }else{
            subtotal.clothes.value+=cart[i].price;
        }
    }
    //console.log(subtotal);

 }

// Exercise 4
function calculateTotal() {
    // Calculate total price of the cart either using the "cartList" array
    //console.log(subtotal);
    for (let x in subtotal)
    total+=subtotal[x].value;
    //console.log(total);
}

// Exercise 5
/*function generateCart(cartList) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for(let x in cartList){
        if(cart!=''){
            for(let y in cart){
                 if (cart[y].id!=cartList[x].id){
                    cart.push({id:cartList[x].id,name:cartList[x].name,price:cartList[x].price,type:cartList[x].type,quantity:1,subtotal:cartList[x].price,subtotalWithDiscount:cartList[x].subtotalWithDiscount});
                   break;
                }else{                 
                    cart[y].quantity+=1;
                    cart[y].subtotal+=cartList[x].price;
                }
            }   
        }else{
            cart.push({id:cartList[x].id,name:cartList[x].name,price:cartList[x].price,type:cartList[x].type,quantity:1,subtotal:cartList[x].price,subtotalWithDiscount:cartList[x].subtotalWithDiscount});
        } 
    }
    console.log(cart);
}*/

// Exercise 6
function applyPromotionsCart(cart) {
    // Apply promotions to each item in the array "cart"
    for(let x in cart){
        if (cart[x].id==1 && cart[x].quantity>=3){
            cart[x].subtotalWithDiscount=cart[x].quantity*10;
        }

        if(cart[x].id==3 && cart[x].quantity>=10){
            cart[x].subtotalWithDiscount=cart[x].subtotal-(cart[x].subtotal*2/3);
        }
    }
    console.log(cart);
}

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    for(let i=0;i<products.length;i++){
        if(products[i].id==id){
             // 2. Add found product to the cart array or update its quantity in case it has been added previously.
            if(cart!=''){
                  var exists= cart.findIndex(el => el.id==id); 

                     if(exists === -1){
                         cart.push({id:products[i].id,name:products[i].name,price:products[i].price,type:products[i].type,quantity:1,subtotal:products[i].price,subtotalWithDiscount:0});
                  
                    }else if(exists >-1){
                        cart[exists].quantity+=1;
                        cart[exists].subtotal+=cart[exists].price;
                    }
                   
            }else{
                cart.push({id:products[i].id,name:products[i].name,price:products[i].price,type:products[i].type,quantity:1,subtotal:products[i].price,subtotalWithDiscount:0});
            }                         
        }         
    }   
    console.log(cart);
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to remove to cart
     if(cart!=''){
        var exists= cart.findIndex(el => el.id==id); 
            if(exists>-1){
                var index = cart.map(x => {
                    return x.id;
                  }).indexOf(id);

                  if(cart[index].quantity>1){
                        cart[index].quantity-=1;
                  }else{
                       cart.splice(index, 1);
                  }
                   
            }else{
                 alert('El producto no está en el carrito.');
            }
                              
    }else{
        alert('El carrito está vacío.');
    }   
    console.log(cart);
    // 2. remove found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    $('.list').append('<body>');
    for(let i=0;i<cart.length;i++){
        $('.list').append('<tr><td>'+cart[i].name+'</td><td>'+cart[i].quantity+'</td><td>'+cart[i].subtotal)+'</td></tr>';
       
    }
    $('.list').append('</body></table>');
}
