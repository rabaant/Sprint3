
// Get the input fields
var password = document.querySelector("#password");
var phone = document.querySelector('#phone');
var name1 = document.querySelector('#name');
var lastname=document.querySelector('#lastname');
var address=document.querySelector('#address');
var email=document.querySelector('#email');
var emailtxt=document.querySelector('#email').innerHTML;

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorLastName = document.getElementById('errorLastName');  
var errorPhone = document.getElementById('errorPhone');
var errorAddress=  document.getElementById('errorAddress');
var errorEmail= document.getElementById('errorEmail');

var allErrors=document.querySelectorAll(".error");
var allInputs=document.querySelectorAll(".input");

allErrors.forEach(error=>{
    error.style.display="none";
});



// Exercise 8
function validate() {
    allErrors.forEach(error=>{
        error.style.display="none";
       
    });
    allInputs.forEach(error=>{
       
        error.style.borderColor="black";
    });
    
    // Validate fields entered by the user: name, phone, password, and email

    if(name1.value=='' || name1.value.length<3 || !/^[a-zA-Z]*$/g.test(name1.value)){
        name1.style.borderColor="red";
        errorName.style.display="inline-block";  
        
    }

    if(lastname.value=='' || lastname.value.length<3 || !/^[a-zA-Z]*$/g.test(lastname.value)){
        lastname.style.borderColor="red";
        errorLastName.style.display="block"; 
        
    }

    var atpos = emailtxt.indexOf("@");
    var dotpos = emailtxt.lastIndexOf(".");

    if(email.value=='' || email.value.length<3 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email.value)){
        email.style.borderColor="red";
        errorEmail.style.display="block"; 
       
    }  

    if(password.value=='' || password.value.length<3 || !/^[0-9a-zA-Z]+$/g.test(password.value)){
        password.style.borderColor="red";
        errorPassword.style.display="block"; 
       
    }

    if(address.value=='' || address.value.length<3){
       
        address.style.borderColor="red";
        errorAddress.style.display="block"; 
        
    }

    if(phone.value=='' || phone.value.length<3 || !/^\d+$/g.test(phone.value)){
        phone.style.borderColor="red";
        errorPhone.style.display="block"; 
       
    }

    


}