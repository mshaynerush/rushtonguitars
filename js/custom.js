
if (document.readyState = 'loading'){

  document.addEventListener('DOMContentLoaded', ready);

} else {

  ready();

}

function ready(){


   loadCart();

        document.getElementById('sendAxe').addEventListener('click', confirm);


             document.getElementById('checkout').addEventListener('click', checkout);   


        var gBody = document.getElementById('bodyColor').addEventListener('change', bodyColor);
        var gBoard = document.getElementById('fretBoard').addEventListener('change', gfret);

                var input = document.getElementsByClassName('input');

            for ( var i = 0; i < input.length; i++){

                var inputChanged = input[i];


    }
}

function confirm(event){



    var gName = document.getElementById("customName").value;
    var gbodyStyle = document.getElementById("bodyStyle").value;
    var gbodyColor = document.getElementById("bodyColor").value;
    var gFretBoard = document.getElementById("fretBoard").value;
    var gInlay = document.getElementById("fretInlay").value;
    var gHardware = document.getElementById("hardwareColor").value;
    var gFretType = document.getElementById("fretType").value;

    var customDesc = "Body Style: " + gbodyStyle + ", Color: " + gbodyColor + ", Fret Board: " + gFretBoard + ", Fret Board Inlay: " + gInlay + ", Hardware: " + gHardware + ", Fret Type: " + gFretType;

    

    var ckVal = GetCookie("BtnClk");
    if (ckVal == null || isNaN(ckVal)){
        ckVal = 0;

        

        var index = +ckVal;



    } else {


    var index = +ckVal;
     
}
    if ( gbodyStyle == "Select" || gbodyColor == "Select" ||  gName == "" ){
        highlightFields();
       
  } else 
    {
        var x = event.target;
        
        
            
            var itemName = document.getElementById('customName').value;
            itemName.trim();
        
            var cartItemNames = cartItems.getElementsByClassName('cart-item-name')
            for (var i = 0; i < cartItemNames.length; i++) {
                if (cartItemNames[i].innerText == itemName) {
                    alert('This item is already added to the cart')
                    return;
                }

            } 

    var cartTotal = GetCookie("CartTotal");
            var addCustomCost = Number(1000) + cartTotal * 1;   

       

       SetCookie("Name" + index, gName);
       SetCookie("Qty" + index, 1);
       SetCookie("Price" + index, "$1000");
       SetCookie("CustomDesc" + index, customDesc);
       SetCookie("CartTotal", addCustomCost);
       SetCookie("BtnClk", +index + 1);
    

        updateTotal();
       loadCart();
    }

}


function bodyColor(event){

    var x = event.target;

        switch (x.value) {

            case "Black Abyss":
            x.style = "background-color: #000; color: #fff";
            break;

            case "Angelic White":
            x.style = "background-image: url('img/sky.jpg'); color: #000";
            break;

            case "Danger Red":
            x.style = "background-color: #AA0000; color: #fff";
            break;

            case "Cold Hearted Blue":
            x.style ="background-color: #4B93B0; color: #FFF";
            break;

            case "Shreddin Green":
            x.style = "background-color: #3ab264; color: #FFF";
            break;

            case "Natural":
            x.style = "background-image: url('img/naturalwood.jpg'); color: #000";
            break;

            case "Select":
            x.style = "background-color: #FFF; color; #000";
            break;
        }



}

function gfret(event){

    var x = event.target

        switch (x.value){

            case "Rosewood":
            x.style = "background-image: url('img/rosewood.jpg'); color: #FFF; font-weight: bold";
            break;

            case "Natural Maple":
            x.style = "background-image: url('img/maplefreboard.jpg'); color: #000;";
            break;

            case "Zebrawood":
            x.style = "background-image: none; color:#000;";
            break;

            case "Ebony":
            x.style = "background-image: none; color:#000;"
            break;


        }
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
 
        return;
    } else {

       idx = Number(GetCookie("BtnClk"));
 
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
            updateTotal()

        
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
  
    var qty = cartRow.getElementsByTagName('input');
    
    var total = 0;
    var qtyVal = 0;
  
        for ( var i = 0; i < qty.length; i++ ){

            qtyVal = parseInt(qty[i].value);
            var priceElement = price[i].innerText;
            var priceVal = parseFloat(priceElement.replace('$',''));
            total += priceVal * qtyVal

              
             console.log( qtyVal, priceVal, total);

        }


       document.getElementById("cartTotal").innerHTML = "$" + total;
        
        SetCookie("CartTotal", total);
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

function qtyChanged(event){

        var x = event.target;
        
            if ( x.value == null || x.value <= 0){
                x.value = 1;
            } 

        updateTotal();
}

function highlightFields(){

    var i = 0;
    var msg = "";
    var name = document.getElementById('customName').value;
    var style = document.getElementById('bodyStyle').value;
    var gcolor = document.getElementById('bodyColor').value;
    alert(style + name + gcolor);
    if ( style == "Select" || gcolor == "Select" || name == ""){

            msg += "Name, Body Style and Color are required.";

            if ( name == "" ){
            document.getElementById('customName').style = "border: 1px solid red";
            }


            if ( style == "Select" ){
            document.getElementById('bodyStyle').style = "border: 1px solid red";
            }

            if ( gcolor == "Select" ){
            document.getElementById('bodyColor').style = "border: 1px solid red";
            }

        }
    alert(msg);
}