const lambda_ui = document.getElementById('lambda-ui');
const lambda_times = document.getElementById('lambda-times');
const more_info = document.getElementsByClassName('more-info');

lambda_ui.parentNode.addEventListener('click', event => {
    if (!lambda_ui.style.transform) {
        lambda_ui.style.transform = "rotateY(180deg)";
    } else {
        lambda_ui.style.transform = "";
    }
});

lambda_times.parentNode.addEventListener('click', event => {
    if (!lambda_times.style.transform) {
        lambda_times.style.transform = "rotateY(180deg)";
    } else {
        lambda_times.style.transform = "";
    }
});

const contact_form = document.getElementById("main-form");
const form_name = document.getElementById("name");
const form_email = document.getElementById("email");
const form_phone = document.getElementById("phone");
const form_message = document.getElementById("message");


contact_form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(form_name.value, form_email.value, form_phone.value, form_message.value);
    form_name.value = "";
    form_email.value = "";
    form_phone.value = "";
    form_message.value = "";
})