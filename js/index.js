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
