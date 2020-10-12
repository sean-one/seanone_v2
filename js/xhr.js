const contact_form = document.getElementById("main-form");
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const phone = document.getElementById("phone").value;
const message = document.getElementById("message").value;


contact_form.addEventListener('submit', event => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://f8oxshxeb5.execute-api.us-east-1.amazonaws.com/default/submit-contact")
    xhr.responseType = 'json';
    const data = {
        name,
        email,
        phone,
        message
    }
    xhr.setRequestHeader('Content-Type', "application/json");
    xhr.send(JSON.stringify(data))
    console.log('sent!');
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
})