let myForm = document.querySelector('form');
let reg_email = document.getElementById('reg-email');
let reg_password = document.getElementById('reg-password');
let reg_name= document.getElementById('reg-name');

myForm.addEventListener('submit',function(){

    localStorage.setItem("email",reg_email.value);
    localStorage.setItem("password",reg_password.value);
    localStorage.setItem("name",reg_name.value);
    alert("Your Details is Succesfully saved. Now you can LOG IN");
    window.location.href = "./login.html";
})