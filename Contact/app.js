function validateform() {
    var name = document.forms["f1"]["name"].value
    var address = document.forms["f1"]["address"].value
    var email = document.forms["f1"]["email"].value
    var number = document.forms["f1"]["number"].value
    var date = document.forms["f1"]["date_join"].value


    name = name.trim();
    address = address.trim();
    email = email.trim();
    number = number.trim();
    date = date.trim();


    if (name.length == 0 || address.length == 0 || email.length == 0 || number.length == 0 || date.length == 0) {
        alert("Fill All required field");
        return false;
    }

    if (!number.match(/^[0-9]{10}$/)) {
        alert("Enter valid 10 digit phone number (Don't Enter Country Code)");
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Enter valid Email id")
        alert("Email format: abc@xyz.pqr")
    }




}