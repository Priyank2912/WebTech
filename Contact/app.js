function validateform() {
    var name = document.forms["f1"]["name"].value
    var address = document.forms["f1"]["address"].value
    var email = document.forms["f1"]["email"].value
    var number = document.forms["f1"]["number"].value
    var date = document.forms["f1"]["date_join"].value
    var gender = document.forms["f1"]["gender"].value

    var checkbox = document.forms["f1"]["check_box"];



    name = name.trim();
    address = address.trim();
    email = email.trim();
    number = number.trim();
    date = date.trim();


    if (name.length == 0 || address.length == 0 || email.length == 0 || number.length == 0 || date.length == 0 || gender.length == 0) {
        alert("Please Fill All required field");
        return false;
    }


    if (!number.match(/^[0-9]{10}$/)) {
        alert("Please Enter valid 10 digit phone number (Don't Enter Country Code)");
        return false;
    }

    if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Enter valid Email id")
        alert("Email format: abc@xyz.pqr")
        return false;
    }

    if (checkbox[0].checked == false && checkbox[1].checked == false && checkbox[2].checked == false && checkbox[3].checked == false) {
        alert("Please Select atleast one Activity");
        return false;
    }

    else {
        alert("Your Submission form is submitted holding a reference number " + Math.floor(Math.random() * 10000000000 + 1000));
    }

}