const form = document.querySelector('.js-form');
const msg = document.querySelector('.form-msg');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    if (!validateUrl(e.target.shorten.value)) {
        event.target.shorten.setAttribute("aria-invalid", "true");
        msg.style.display = 'block';
    } else {
        event.target.shorten.setAttribute("aria-invalid", "false");
        msg.style.display = 'none';
    }
}

function validateUrl(value) {
    var input = document.createElement('input');

    input.type = 'url';
    input.required = true;
    input.value = value;

    return typeof input.checkValidity === 'function'
        ? input.checkValidity()
        : /\S+@\S+\.\S+/.test(value);
}
