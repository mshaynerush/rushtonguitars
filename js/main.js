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

      var custom = GetCookie("CustomBtnClk");
      var feature = GetCookie("BtnClk");
        if ( custom == null && feature != null ){
          var idx = feature;
        }

        if ( feature == null && custom == null ){
          var idx = 0

        } else {

          var idx = feature;
        }

        var maxLen = document.cookie.split(";").length;
 console.log(maxLen);
        var x = 0;
        for ( var i = 0; i < maxLen; i++){

          
          var itemName = GetCookie("Name" + i );
          console.log(itemName);
          if ( itemName != null );
          x++
          continue;
          
        }
  console.log(x);
      for (var i = 0; i < x; i++){
        

    console.log(i);
     
      var itemName = GetCookie( "Name" + i )
          if ( itemName == null ){
                
        
            continue;
          }
        


          var itemDesc = GetCookie("Desc" + i);
          var itemPrice = GetCookie("Price" + i);
          var itemQty = GetCookie("Qty" + i);
          var cartTotal = GetCookie("CartTotal");

          console.log(i, idx, itemDesc, itemPrice, itemQty, cartTotal);

     

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

          var input = document.getElementsByClassName('cart-quantity-input');
            for ( var i = 0; i < input.length; i++){

                    inputChanged = input[i];
                    inputChanged.addEventListener('change', qtyChanged);
            

        }

          document.getElementsByClassName('cartTotal').innerHTML = "$" + cartTotal;

        var input = document.getElementsByClassName('input');

            for ( var i = 0; i < input.length; i++){

                var inputChanged = input[i];
                    inputChanged.addEventListener('change', qtyChanged);
            }

        var remove = document.getElementsByClassName('btn-danger');

            for ( var i = 0; i < remove.length; i++){

                var removeChanged = remove[i];
                    removeChanged.addEventListener('click', removeItem);
            }

           // addCustom();
            updateTotal();

    
} 

function addToCart(event){

        var x = event.target;
        
        var myRow = x.parentElement;

          var itemName = myRow.getElementsByClassName('item-name')[0].innerText;
          var itemDesc = myRow.getElementsByClassName('item-desc')[0].innerText;
          var itemQty = 1;
          var itemPrice = myRow.getElementsByClassName('item-price-value')[0].innerText;
          var btnClick = GetCookie("BtnClk");
            var btnIndex = +btnClick;
              if ( btnIndex == null ){
                btnIndex = 0;
              } else 
            var cartItemNames = cartItems.getElementsByClassName('cart-item-name')
                        for (var i = 0; i < cartItemNames.length; i++) {
                if (cartItemNames[i].innerText == itemName) {
                    alert('This item is already added to the cart')
                    return;
                }

            } 
            switch (itemName){

              case "The Terminator":
                var i = 0;
                break;

              case "The Perpetrator":
                var i = 1;
                break;

              case "The Decimator":
                var i = 2;
                break;

              case "The Calculator":
                var i = 3;
                break;

              case "The Peacemaker":
                var i = 4;
                break;

              case "The Romancer":
                var i = 5;
                break;



            }

 
              SetCookie("Name" + i, itemName);
              SetCookie("Desc" + i, itemDesc);
              SetCookie("Price" + i, itemPrice);
              SetCookie("Qty" + i, itemQty);
              SetCookie("BtnClk", btnIndex + 1)
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

          var btnClick = parseInt(itemLength);
      
               switch (itemName){

              case "The Terminator":
                var i = 0;
                break;

              case "The Perpetrator":
                var i = 1;
                break;

              case "The Decimator":
                var i = 2;
                break;

              case "The Calculator":
                var i = 3;
                break;

              case "The Peacemaker":
                var i = 4;
                break;

              case "The Romancer":
                var i = 5;
                break;

            }
              

              DeleteCookie("Name" + i);
              DeleteCookie("CustomDesc" + i);
              DeleteCookie("Desc" + i)
              DeleteCookie("Price" + i);
              DeleteCookie("Qty" + i);
              SetCookie("BtnClk", itemLength- 1);

            

                var cookieVal = GetCookie("BtnClk")
                if (cookieVal < 0){
                  SetCookie("BtnClk", 0)
                } 

       removeItem.remove();

       

       updateTotal();

} 

function updateTotal(){


    var cartRow = document.getElementsByClassName('item-row')[0];
    var price = document.getElementsByClassName('cart-item-price');
  
    var qty = cartRow.getElementsByTagName('input');
    
    var total = 0;
    var qtyVal = 0;
  
        for ( var i = 0; i < qty.length; i++ ){

            qtyVal = parseInt(qty[i].value);
            var priceElement = price[i].innerText;

              if (priceElement == null){
      
                continue;
              } else if (isNaN(qtyVal)){
    
                continue;
              }

            var priceVal = parseFloat(priceElement.replace('$',''));
            total += parseInt(priceVal) * parseInt(qtyVal)
              var cartTotal = total;
              
  

        }


       document.getElementById("cartTotal").innerHTML = "$" + total;
        
        SetCookie("CartTotal", parseInt(total));
}


function checkout(event){

    var isName = GetCookie("FirstName");

      if ( isName != null ){
  
    location.replace('confirm.html');
    
  } else if(document.cookie == "") {

    return;
  } else {    location.replace('checkout.html');
  }
}

function addCustom(){

        var idx = GetCookie("CustomBtnClk");
          
          if ( idx == null ){
            return
          }
        
        for (var i = 5; i < idx; i++){
  


          var itemName = GetCookie( "Name" + i )
          if ( itemName == null ){
            idx++
            continue;
          }
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

      updateTotal();
}