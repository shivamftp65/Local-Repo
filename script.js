let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.addEventListener('click', ()=>{
    if(password.type === "password"){
        password.type = "text";
        eyeicon.src = "https://tse1.mm.bing.net/th?id=OIP.qhUh9XrCyAfwLEZNnutXqwHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109";
    }
    else{
        password.type = "password";
        eyeicon.src = "https://tse1.mm.bing.net/th?id=OIP.-kc7NzYl0yufIQ6uYCPH8AHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109";
    }
})