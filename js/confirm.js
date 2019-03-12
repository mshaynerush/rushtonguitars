
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
    var zip = document.getElementById('inputZip').value;
    var email = document.getElementById('email').value;
    var phone = "Phone: " + document.getElementById('phone').value;


        SetCookie("FirstName", fName);
        SetCookie("LastName", lName);
        SetCookie("Street", street);
        SetCookie("Unit", unit);
        SetCookie("City", city);
        SetCookie("Zip", zip);
        SetCookie("Email", email);
        SetCookie("Phone", phone);

    location.replace('confirm.html');

}

