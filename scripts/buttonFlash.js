var r = document.querySelector(':root');
var orange = getComputedStyle(r).getPropertyValue('--orange');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

function flashButton() {
    // document.querySelector('#theme').setAttribute('style', 'background-color: ' + getComputedStyle(r).getPropertyValue('--orange').toString() + ';');
    document.querySelector('#theme').classList.add('bg-orange');
    sleep(500).then(() => {
        // document.querySelector('#theme').setAttribute('style', 'background-color: none');
        document.querySelector('#theme').classList.remove('bg-orange');
    });
};

setInterval(flashButton, 1000);