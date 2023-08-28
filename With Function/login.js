// Step - 1: Add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // Step - 2: Get the email address inside the email input field
    // Always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    // Step - 3: Get Password
    // 3 - a: set id on the html element
    // 3 - b: get the element
    // 3 - c: get the value from the element
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;

    // DANGER : Don't verify email password on the client side
    // Step - 4: verify email and password
    if(email === 'sontan@baap.com' && password === 'secret'){
        window.location.href = 'bank.html'
    }
    else{
        alert('invalid user');
    }
})