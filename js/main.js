if (document.readyState = 'loading'){

  document.addEventListener('DOMContentLoaded', ready);

} else {

  ready();

}

function ready(){


loadCart();
evenListenerAfterLoad();




 var myAddButtons = document.getElementsByClassName('btn-add');

      for ( var i = 0; i < myAddButtons.length; i++){

          var buttonAdd = myAddButtons[i];

            buttonAdd.addEventListener('click', addToCart);
      }
      
document.getElementById('checkout').addEventListener('click', checkout);
 


  

}

function checkCookie(){
    var cookieEnabled = navigator.cookieEnabled;
    if (cookieEnabled){ 
        document.cookie = name;
        cookieEnabled = document.cookie.indexOf(name)!=-1;
    }
    return cookieEnabled;
}


function getCookieVal (offset) {
   var endstr = document.cookie.indexOf (";", offset);
   if (endstr == -1)
      endstr = document.cookie.length;
   return unescape(document.cookie.substring(offset, endstr));
}

//
// Function to return the value of the cookie specified by "name".
// name - String object containing the cookie name.
// returns - String object containing the cookie value, or null if
// the cookie does not exist.
//
function GetCookie(name) {
  
if (checkCookie())
  {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while (i < clen) {
      var j = i + alen;
      if (document.cookie.substring(i, j) == arg)
         return getCookieVal (j);
      i = document.cookie.indexOf(" ", i) + 1;
      if (i == 0) break;
   }
   return null;
  }
   else
     return sessionStorage.getItem(name);
}

function SetCookie (name, value) {
   if (checkCookie())
  {

   var argv = SetCookie.arguments;
   var argc = SetCookie.arguments.length;
   var expires = (argc > 2) ? argv[2] : null;
   var path = (argc > 3) ? argv[3] : null;
   var domain = (argc > 4) ? argv[4] : null;
   var secure = (argc > 5) ? argv[5] : false;
   document.cookie = name + "=" + escape (value) +
     ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
     ((path == null) ? "" : ("; path=" + path)) +
     ((domain == null) ? "" : ("; domain=" + domain)) +
     ((secure == true) ? "; secure" : "");
  }
  else
          sessionStorage.setItem(name, value);

}

// Function to delete a cookie. (Sets expiration date to current date/time)
// name - String object containing the cookie name
//
function DeleteCookie (name) {
   var exp = new Date();
   exp.setTime (exp.getTime() - 1); // This cookie is history
   var cval = GetCookie (name);
   document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
} 

function loadCart(){

  document.getElementById('cartItems').innerHTML = "";

  var ckVal = GetCookie("BtnClk");
    if (ckVal == null){
       console.log(ckVal);
        return;
    } else if (ckVal != null){ 
        idx = Number(GetCookie("BtnClk"));
         console.log(idx);
      
    }
  
       
        for (var i = 0; i < idx; i++){
          var itemName = GetCookie("Name" + i);
          var itemDesc = GetCookie("Desc" + i);
          var itemPrice = GetCookie("Price" + i);
          var itemQty = GetCookie("Qty" + i);
          var cartTotal = GetCookie("CartTotal");


          
         

          var cartRow = document.getElementsByClassName('item-row')[0];

          var itemRow = document.createElement('div');
              itemRow.classList.add('cart-item');

          var itemContent =

            `
                    <div class="cart-item-name">${itemName}</div>
                    <div class="cart-item-price">${itemPrice}</div>
                    <div class="cart-qty-input"><input type="number" step="1" value="${itemQty}" class="form-control cart-quantity-input"></div>
                    <div class="remove-btn"><button class="cart-item-btn-remove btn-sm btn-danger">Remove</button></div>
                    <div class="remove-btn" id="${i}"><button class="cart-item-btn-remove-x btn-sm btn-danger" id="${i}">x</button></div>
                    <br /><br />

          `

          itemRow.innerHTML = itemContent;
          cartRow.append(itemRow);




        }

          document.getElementsByClassName('cartTotal').innerHTML = "$" + cartTotal;
        
} 

function addToCart(event){

        var x = event.target;
        
        var myRow = x.parentElement;

          var itemName = myRow.getElementsByClassName('item-name')[0].innerText;
          var itemDesc = myRow.getElementsByClassName('item-desc')[0].innerText;
          var itemQty = 1;
          var itemPrice = myRow.getElementsByClassName('item-price-value')[0].innerText;
          var cartItems = document.getElementsByClassName('item-row')[0];
          var cartItemNames = cartItems.getElementsByClassName('cart-item-name')
            for (var i = 0; i < cartItemNames.length; i++) {
                if (cartItemNames[i].innerText == itemName) {
                    alert('This item is already added to the cart')
                    return;
                }

            } 

              SetCookie("Name" + i, itemName);
              SetCookie("Desc" + i, itemDesc);
              SetCookie("Price" + i, itemPrice);
              SetCookie("Qty" + i, itemQty);
              SetCookie("BtnClk", i + 1);
              loadCart();

              
              var myInputAdded = document.getElementsByClassName('cart-quantity-input');
              var myRemoveBtn = document.getElementsByClassName('btn-danger');
                  for (var i = 0; i < myInputAdded.length; i++){
                    var myInputChanged = myInputAdded[i];
                        myInputChanged.addEventListener('change', qtyChanged);

                  }

                  for (var i = 0; i < myRemoveBtn.length; i++){
                    var btnRemClick = myRemoveBtn[i];
                        btnRemClick.addEventListener('click', removeItem);

                  }
                  updateTotal();

}

function qtyChanged(event){

        var x = event.target;
        
            if ( x.value == null || x.value <= 0){
                x.value = 1;
            } 

        updateTotal();
}


function evenListenerAfterLoad(){

  var myInputAdded = document.getElementsByClassName('cart-quantity-input');
  var myRemoveBtn = document.getElementsByClassName('btn-danger');

      for (var i = 0; i < myInputAdded.length; i++){
        var myInputChanged = myInputAdded[i];
            myInputChanged.addEventListener('change', qtyChanged);

      }

      for (var i = 0; i < myRemoveBtn.length; i++){
        var btnRemClick = myRemoveBtn[i];
            btnRemClick.addEventListener('click', removeItem);

      }

    }

function removeItem(event){

   

    var x = event.target

      var removeItem = x.parentElement.parentElement;

          var itemName = removeItem.getElementsByClassName('cart-item-name')[0].innerText;
        
          var itemLength = GetCookie("BtnClk");
          
            for ( var i = 0; i < itemLength; i++ ){

                if ( GetCookie("Name" + i) == itemName) {
              
                    var rowID = i;
                }
              }

              DeleteCookie("Name" + rowID);
              DeleteCookie("Desc" + rowID);
              DeleteCookie("Price" + rowID);
              DeleteCookie("Qty" + rowID);
              SetCookie("BtnClk", GetCookie("BtnClk") - 1);



       removeItem.remove();

       

       updateTotal();

}

function updateTotal(){


    var cartRow = document.getElementsByClassName('item-row')[0];
    var price = document.getElementsByClassName('cart-item-price');
    console.log(price);
    var qty = cartRow.getElementsByTagName('input');
    
    var total = 0;
    var qtyVal = 0;
  
        for ( var i = 0; i < qty.length; i++ ){

            qtyVal = qtyVal + parseInt(qty[i].value);
            var priceElement = price[i].innerText;
            var priceVal = priceElement.replace('$','');

            total = total + qtyVal * priceVal;

        }

       document.getElementById("cartTotal").innerHTML = "$" + total;
        console.log(qtyVal, priceElement, priceVal, total);
        SetCookie("CartTotal", total);
}


function checkout(event){

    var isName = GetCookie("FirstName");

      if ( isName != null ){
    console.log(isName);
    location.replace('confirm.html');
    
  } else if(document.cookie == "") {

    return;
  } else {    location.replace('checkout.html');
  }
}

