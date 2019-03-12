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


            var len = GetCookie("BtnClk");
            console.log(len);

            for ( var i = 0; i < len; i++){

               var itemName = GetCookie("Name" + i);
               var itemQty = GetCookie("Qty" + i);
                var itemPrice = GetCookie("Price" + i);
                var priceElement = itemPrice.replace('$', '');
                var itemDesc = GetCookie("Desc" + i);
                var price = parseFloat(priceElement);
                var subTot = itemQty * price;
            

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
                    
                    <div class="col-4 cart-label">${itemName}</div><div class="col-3 cart-label">${itemQty}</div><div class="col-2 cart-label">${itemPrice}</div><div class="col-3 cart-label">${subTot}</div>
                    
                </div>
            </div>

            <div class="row">

                <div class="col-12 cart-desc-confirm">Item Description: ${itemDesc}</div>

            </div>

            `
        }
        placeCart.innerHTML = confirmCartContent;
        cartRow.append(placeCart);
        }
    

        document.getElementById('tot').innerHTML = "$" + cartTotal;



           document.getElementById('sendAxe').addEventListener('click', thankyou);
}

function thankyou(){

    location.replace("thankyou.html");

}