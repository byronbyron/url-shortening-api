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

        shortenLink(e.target.shorten.value);
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

function shortenLink(link) {
    const res = fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        .then(response => response.json())
        .then(data => {
            const originalLink = data.result.original_link;
            const shortLink = data.result.full_short_link3;
            injectUrlListItem(originalLink, shortLink);
        });
}

function injectUrlListItem(originalLink, shortLink) {
    const listItem = `<div class="url-list__item">
                    <div class="url-list__item-head">
                      <a href="${originalLink}" target="_blank" rel="noreferrer nofollow">${originalLink}</a>
                    </div>
                    <div class="url-list__item-body">
                      <a href="${shortLink}" target="_blank" rel="noreferrer nofollow">${shortLink}</a>
                      <button type="button" class="btn btn-primary url-list__botton js-copy-btn">Copy</button>
                    </div>
                  </div>`;

    const list = document.querySelector('.js-url-list');
    list.insertAdjacentHTML('beforeend', listItem);
}
