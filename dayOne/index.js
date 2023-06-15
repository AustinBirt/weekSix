// // const form = document.querySelector("#registrationForm");
// // const emailInput = document.querySelector("#email");
// // const passwordInput = document.querySelector("#password");

// // const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// // const passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

// // form.addEventListener("submit", function (event) {
// //   event.preventDefault();

// //   let errors = [];

// //   if (!emailPattern.test(emailInput.value)) {
// //     errors.push("Please enter a valid email address!!!");
// //   }

// //   if (!passwordPattern.test(passwordInput.value)) {
// //     errors.push(
// //       "Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
// //     );
// }

// //   if (errors.length > 0) {
// //     alert(errors.join("\n"));
// //     return;
// //   }

// //   let fName = document.getElementById("fName").value;
// //   let lName = document.getElementById("lName").value;
// //   let email = emailInput.value;
// //   let password = passwordInput.value;

// //   //get item allows us to grab something from local storage if invoked onthe local storage
// //   let existingUsers = JSON.parse(localStorage.getItem("People")) || [];
// //   let isExistingUser = existingUsers.some(function (user) {
// //     return user.email === email;
// //   });

// //   if (isExistingUser) {
// //     alert("This email is already registered. Please use a different email.");
// //   } else {
// //     existingUsers.push({ fName, lName, email, password });
// //     localStorage.setItem("People", JSON.stringify(existingUsers));
// //     alert("Registration successful!");
// //   }
// // });





let registration=document.querySelector('#registration')
let usernameInput = document.querySelector("#usernameInput");
let emailInput = document.querySelector("#emailInput");
let passwordInput = document.querySelector("#passwordInput");
let passwordVerification = document.querySelector('#passwordVerification')
let termsConditions=document.querySelector('#termsConditions')
//assinging the value of the above inputs to a variable outside of the event listener was not wokring for me, the variables are being read before any input is being made, the input is read and triggered on submit, or change, i would need to assign the input value to a variable inside an eventlistener (although you can assign outside of an event listener if giving it a default value).
// let password = passwordInput.value;

//The event listener wasn't working on 'change' for inputs because the 'change' occurs when the inp;ut value is changed. the input value isnt changed if the user forgets to put something there altogether. Although, it will trigger if you ask if the string is empty IF they were typing then they decide to erase it. That would be annoying, so i needed to do the event listener on submit
//During this process i learned about blur trigger, which triggers when something is clicked off of and loses focus, this requries that it had been clicked on before though. I also learned about trim() which is a method you can call on strings to trim them of any whitespace.



registration.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = usernameInput.value;
    let email = emailInput.value;
    let password=passwordInput.value;
    let verification=passwordVerification.value
    let isvalid=true;

    let usernamePattern=/^(?=.*(.).*\1)(?=.*(.)(?!\1)).+$/
    //the pattern below means any word character, digit or underscore
    let usernamePattern2=/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/
    let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let domainRegex = /@example\.com$/i
    let passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])(?!.*password)(?!.*USERNAME).*.{12,}$/;


    if(username===""){
        alert('please include a username')
        isvalid=false;
        }
    else if(username.length<=3 && username.length>=1){
        alert('please make make your username longer')
        isvalid=false;

    }
    //(make sure to initialize the regular expression with / on both sides)this code, i set the regular expression for 2 unique characters, it uses positive and negative lookahead from beginning to end of the string to ensure characters arent repeated. I also use .test() method on it and pass username to test whether username follows the rules. test returns boolean. So if it fails i can warn the user.
    else if(!usernamePattern.test(username)){
        alert('please have unique characters')
        isvalid=false;

    }
    
    else if(usernamePattern2.test(username)){
        alert('You must use characters, underscores or digits only. No special characters')
        isvalid=false;    
    }

    else if(!emailPattern.test(email)){
        alert('Please put in a valid email')
        isvalid=false;
    }

    else if(domainRegex.test(email)){
        alert("please don't use @example.document")
        isvalid=false;
    }

    else if(!passwordPattern.test(password)){
        alert(`Your Password must follow these requirements:
        1. Atleast 12 characters
        2. Atleast one Uppercase and one Lowercase
        3. Atleast one number
        4. Atleast one special character
        5. Cannot contain the word password
        6. Cannot contain the username
        7. Both password must match
        `);
        isvalid=false;
    }

    else if(password!=verification){
        alert('your password fields do not match')
        isvalid=false;
    }

    else if(!termsConditions.checked){
        alert('please agree to the terms and conditions')
        isvalid=false;
    }
    
    // if(isvalid){
    //     sendToStorage(username,email,password)
    //     existingUser.push(username,email,password)
    // }
      //get item allows us to grab something from local storage if invoked onthe local storage
    let existingUsers = JSON.parse(localStorage.getItem("People")) || [];
    let isExistingUser = existingUsers.some(function (user) {
    return user.email === email;
  });
  if(isvalid){
    if (isExistingUser) {
        alert("This email is already registered. Please use a different email.");
    } else {
        existingUsers.push({ username:usernameInput.value.toLowerCase, email:emailInput.value.toLowerCase, password:passwordInput.value});
        localStorage.setItem("People", JSON.stringify(existingUsers));
        alert("Registration successful!");
    }}
    if(isvalid){
        if(isExistingUser){}
    }
    if(isvalid){
        form.submit()
    }

    });


let loginForm=document.querySelector('#loginForm')



// let existingUser=[]

// function getExistingUser(user)

//     function sendToStorage(username,email,password){
//         localStorage.setItem('username',username.toLowerCase);
//         localStorage.setItem('email',email.toLowerCase);
//         localStorage.setItem('password',password)
//     }

