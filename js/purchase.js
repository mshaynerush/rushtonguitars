    if (document.readyState = 'loading'){

  document.addEventListener('DOMContentLoaded', ready);

} else {

  ready();

}

function ready(){

        

          var cartTotal = GetCookie("CartTotal");
          var firstName = GetCookie("FirstName");
          var lastName = GetCookie("LastName");
          var addr = GetCookie("Street");
          var unit = GetCookie("Unit");
          var city = GetCookie('City');
          var state = GetCookie('State');
          var zip = GetCookie('Zip');
          var Email = GetCookie('Email');
          var Phone = GetCookie('Phone');

        

    var custInfo = document.getElementById('custInfoBlock');

        var placeInfo = document.createElement('div');

            var confirmInfoContent = 

           `

                    
                <div class="cust-lbl">Name:</div><div class="cust-info">${firstName} ${lastName}</div><br />
                <div class="cust-lbl">Address:</div><div class="cust-info">${addr} ${unit}</div><br />
                <div class="cust-lbl">City:</div><div class="cust-info">${city}, ${state} ${zip}</div><br />
                <div class="cust-lbl">Email:</div><div class="cust-info">${Email}</div><br />
                <div class="cust-lbl">Phone:</div><div class="cust-info">${Phone}</div>
                        

            `

            placeInfo.innerHTML = confirmInfoContent;

            custInfo.append(placeInfo);


            var len = GetCookie("CustomBtnClk");
            if ( GetCookie("CustomBtnClk") == null ){
                len = GetCookie("BtnClk");
                }

            if ( GetCookie("BtnClk") == null) {return;
            } else {
            for ( var i = 0; i < len; i++){

               var itemName = GetCookie("Name" + i);
               var itemQty = GetCookie("Qty" + i);
                var itemPrice = GetCookie("Price" + i);
                if ( itemPrice == null ){
                  continue;
                }
                var priceElement = itemPrice.replace('$', '');
                var itemDesc = GetCookie("Desc" + i);
                var price = parseFloat(priceElement);
                var subTot = itemQty * price;
            
                  console.log(GetCookie("Price0"))
        var cartRow = document.getElementById('cartContentBlock')
        var placeCart = document.createElement('div');
            
            if ( itemDesc == null ){

                    var confirmCartContent =

            `


            <div class="row">

                <div class="col-12 cart-headings item">
                    
                    <div class="col-4 cart-label">${itemName}</div><div class="col-3 cart-label">${itemQty}</div><div class="col-2 cart-label">${itemPrice}</div><div class="col-3 cart-label">${subTot}</div>
                    
                </div>
            </div>
            
            `

            } else {
            confirmCartContent =

            `


            <div class="row">

                <div class="col-12 cart-headings item">
                    
                    <div class="col-4 cart-label">${itemName}</div><div class="col-3 cart-label">${itemQty}</div><div class="col-2 cart-label">${itemPrice}</div><div class="col-3 cart-label">$${subTot}</div>
                    
                </div>
            </div>

            <div class="row">

                <div class="col-12 cart-desc-confirm">Item Description: ${itemDesc}</div>

            </div>

            <div class="green-line"></div>

            `
        }
        placeCart.innerHTML = confirmCartContent;
        cartRow.append(placeCart);
        }
    
}
        document.getElementById('tot').innerHTML = "$" + cartTotal;



           document.getElementById('sendAxe').addEventListener('click', thankyou);
}

function DeleteCookie (name) {
   var exp = new Date();
   exp.setTime (exp.getTime() - 1); // This cookie is history
   var cval = GetCookie (name);
   document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
} 



function thankyou(){

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

    for ( var i = 0; i < x; i++){
      

        DeleteCookie("Name" + i);
        DeleteCookie("Desc" + i);
        DeleteCookie("Qty" + i);
        DeleteCookie("Price" + i);
        DeleteCookie("BtnClk");
        DeleteCookie("CartTotal" + i);
    }

    location.replace("thankyou.html");

}