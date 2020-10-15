const contact_form = document.getElementById("main-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");


contact_form.addEventListener('submit', event => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://f8oxshxeb5.execute-api.us-east-1.amazonaws.com/default/submit-contact")
    xhr.responseType = 'json';
    const data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data))
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
    console.log('sent!');
    console.log(data)
})