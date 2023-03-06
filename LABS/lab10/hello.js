const user = document.getElementById('username-entry');
const pw = document.getElementById('password-entry');
const submitButton = document.getElementById("submit-button");

const form = document.getElementById('login-form');

submitButton.addEventListener('click', function (e) {

    e.preventDefault();

    console.log(user.value);    
    console.log(pw.value);

    document.getElementById('values').innerHTML= "you entered:" + "<br>" + user.value + "<br>" + pw.value;

});

