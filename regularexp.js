function validateform(){
    var emailID = document.getElementById("emailID").value
    if (!emailID) {
        document.getElementById("emailID").style.border = "1px solid red";
        document.getElementById("Email_error").innerText = "Email Can't be empty";
    } else {
        document.getElementById('emailID').style.border = "1px solid rgb(118, 118, 118)";
        document.getElementById("Email_error").innerText = null;
    }

    var Website = document.getElementById("Website").value
    if(!Website){
        document.getElementById("Website").style.border = "1px solid red";
        document.getElementById("Website_error").innerText = "website Can't be empty";
    } else {
        document.getElementById("Website").style.border  = "1px solid rgb(118, 118, 118)";
        document.getElementById("Website_error").innerText = null;
    }

    var pass = document.getElementById("pass").value
    if (!pass) {
        document.getElementById("pass").style.border = "1px solid red";
        document.getElementById("pass_error").innerText = "password Can't be empty";
    }
    else {
        document.getElementById('pass').style.border = "1px solid rgb(118, 118, 118)";
        document.getElementById("pass_error").innerText = null;
    }

    var credit1 = document.getElementById("cc1").value
    if(credit1.length != 10){
        document.getElementById("cc1").style.border = "1px solid red"; 
        document.getElementById("cc1-error").innerText = "invalid";
    } else {
        document.getElementById('cc1').style.border = "1px solid rgb(118, 118, 118)";
        document.getElementById("cc1-error").innerText = null;
    }

    var credit2 = document.getElementById("cc2").value
    if(credit2.length != 14){
        document.getElementById("cc2").style.border = "1px solid red"; 
        document.getElementById("cc2-error").innerText = "invalid";
    } else {
        document.getElementById('cc2').style.border = "1px solid rgb(118, 118, 118)";
        document.getElementById("cc2-error").innerText = null;
    }

    var credit3 = document.getElementById("cc3").value
    if(credit3.length != 18){
        document.getElementById("cc3").style.border = "1px solid red"; 
        document.getElementById("cc3-error").innerText = "invalid";
    } else {
        document.getElementById('cc3').style.border = "1px solid rgb(118, 118, 118)";
        document.getElementById("cc3-error").innerText = null;
    }


}