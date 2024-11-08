const signUp = document.getElementById('signUp')
const Login = document.getElementById('logIn')
const Logout = document.querySelector('.LogoutBtn')
const users = JSON.parse(localStorage.getItem(('users'))) || [];

console.log(users)
Login?.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = document.getElementById('loginEmail').value
    const password = document.getElementById('loginPassword').value
    const error = document.querySelector('.loginError')
    
    const user = users.find(user => user.email === email && user.password === password)

    if(user){
        localStorage.setItem("auth","true")
        window.location.href = 'homepage.html'
        console.log(user)
    }else{
        error.innerText = 'invalid credential!'
        Login.style.borderColor = "red"
        setTimeout(() => {
              error.innerText ="";
              Login.style.borderColor = ""
    }, 5000);
    }
})
signUp?.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('confirm-password').value
    const error = document.querySelector('.error')

     const emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
     const passwordRegex = /^(?=.*[A-Za-z]).{8,20}$/;

     let errorMessage = "";
     if (!emailRegex.test(email)){
        errorMessage += "Invalid email format.";
     }else if (!usernameRegex.test(username)){
        errorMessage += "Username must contain only letters, numbers, and underscores. "
     }else if (!passwordRegex.test(password)){
        errorMessage += "Password must be between 8 to 20 characters, with at least one letter ";
     }else if (password !== confirmPassword){
        errorMessage +="Passwords do not match. ";
     }

     if(users.some(user=> user.email === email)){
        alert('user already exist')
        window.location.href = 'Signin.html'
        return;
     }
     
        if (errorMessage) {
          
            error.innerText = errorMessage;
            signUp.style.borderColor = "red"
            setTimeout(() => {
                  error.innerText ="";
                  signUp.style.borderColor = ""
        }, 5000);
        } else {
            alert("Registration successful!");
            window.location.href = 'homepage.html'
            console.log(users)
            signUp.reset();
        }
    users.push({username,email,password})
    localStorage.setItem('users',JSON.stringify(users))
    console.log(users)

})

Logout.addEventListener("click",()=>{
    localStorage.removeItem("auth")
    window.location.href = "Signin.html"
})