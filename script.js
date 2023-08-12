const form = document.querySelector('form');
const input = document.querySelector('input');



form.addEventListener('submit', async event => {
    event.preventDefault();
    console.log("ezt");
  
    if (isUrl(input.value)) {
        window.location.href = "https://" + input.value;
    }
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};
