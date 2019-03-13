
if (document.readyState = 'loading'){

  document.addEventListener('DOMContentLoaded', ready);

} else {

  ready();

}

function ready(){

        document.getElementById('sendAxe').addEventListener('click', confirm);

    }




function confirm(event){

    var fName = document.getElementById('fname').value;
    var lName = document.getElementById('lname').value;
    var street = document.getElementById('addr1').value;
    var unit = "Unit: " + document.getElementById('addr2').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('inputZip').value;
    var email = document.getElementById('email').value;
    var phone = "Phone: " + document.getElementById('phone').value;

           if ( fName == "" || lName == "" || street == "" ||  city == "" || state == "" || zip == "" || email == "" ){

            alert("Then following fields are required: First and Last Name, Street Address Including City, State and Zip, and Email");
                return;
        }

        if (email.indexOf("@",0) < 0) {
        alert("This is not a valid e-mail address!");
            document.getElementById('email').style = "border-color: #AA0000";
            return;
        }
       
       var validPhone = /\d{3}-\d{3}-\d{4}/;
            if ( validPhone.test(phone) == false ){

                alert("Phone is not valid. Please use format: XXX-XXX-XXXX");
                document.getElementById('phone').style="border-color: #AA0000";
                return;
            }


 
    

        SetCookie("FirstName", fName);
        SetCookie("LastName", lName);
        SetCookie("Street", street);
        SetCookie("Unit", unit);
        SetCookie("City", city);
        SetCookie("State", state);
        SetCookie("Zip", zip);
        SetCookie("Email", email);
        SetCookie("Phone", phone );

    location.replace('confirm.html');

}


function checkPhone(event){

    var x = event.target.value

        validPhone =  /\d{3}-?\d{3}-?\d{4}/;
        if ( validPhone.test(x) = true ){

            alert("Please enter phone with the format XXX-XXX-XXXX");
        }

}
