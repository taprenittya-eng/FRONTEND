function mandatory(){
    var userid=document.getElementById("username").value;
    var contact=document.getElementById("contactno").value;
    var pss=document.getElementById("pass").value;
    var con_pss=document.getElementById("con-pass").value;
    if(userid=="" || contact=="" || pss=="" || con_pss=="" ){
        alert("All feilds are mandatory!");
        return false;
    }
    else if(contact.length<10 || contact.length>10 ){
        alert("Contact number should be of 10 digits!");
        return false;
    }
    else if(isNaN(contact)){
        alert("Contact number should be in digits!");
        return false;
    }
    else if(pss !=con_pss ){
        alert("Password doesn't match! Re-enter the password.");
        return false;
    }
    else{
        true;
    }
}