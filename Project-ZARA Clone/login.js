let loginForm = document.querySelector('form');
let login_email = document.getElementById('login-email');
let login_password = document.getElementById('login-passward');
let local_email = localStorage.getItem("email");
let local_password = localStorage.getItem("password");

loginForm.addEventListener('submit', function(e)
{
    e.preventDefault();   
    // console.log(login_email.value,'form')
    if (login_email.value == local_email && login_password.value == local_password)
    {
        alert("Welcom to the Site.");
        
        window.location.href = "./index.html";
    }
    else
    {
        alert("Please enter your correct details.");
    }
})