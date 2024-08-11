const contact_form = document.getElementById("main-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const button = document.getElementById("submit-btn");


contact_form.addEventListener('submit', event => {
    event.preventDefault();
    
    // put together data from form
    const data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value
    }

    // create and send request
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://f8oxshxeb5.execute-api.us-east-1.amazonaws.com/default/submit-contact")
    xhr.responseType = 'json';
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data))
    
    // clear form and disable submit button
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
    button.setAttribute("value", "Message Sent | Thank you")
    button.setAttribute("disabled", "true");
})