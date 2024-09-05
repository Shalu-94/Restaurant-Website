function adfd(){
    alert("Food added to cart!");
}
function validate(){
    const namee=document.form1.myname.value;
    const num=document.form1.mynumber.value;
    const mail=document.form1.mailid.value;
    const psw=document.form1.pswd.value;
    var epattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"; 
    let nameRegex = /^[a-zA-Z\-]+$/.test(namee);
    if(nameRegex==false){
        alert("Please Enter valid Name..!");
        return false;
    }
    else if(num.length<10){
        alert("Number should have 10 digits!!");
        return false;
    }
    else if(epattern.test(mail)==false){
            alert("Enter valid email!!");
        return false;
    }
    else if(psw.length<6){
       alert("password should be atleast 6 characters!!");
    return false;
    }
    alert("Submitted:)");
    
}