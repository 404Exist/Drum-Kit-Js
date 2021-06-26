window.addEventListener('keydown', drumKitsPlay);
window.addEventListener('keyup', removeBackground);

let keys = document.querySelectorAll('.key');
keys.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        let clickedKeyCode = e.path[1].getAttribute("data-keycode") || e.path[0].getAttribute("data-keycode");
        let audio = document.querySelector(`audio[data-keyCode="${clickedKeyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
    });
});

function drumKitsPlay(e) {
    let audio = document.querySelector(`audio[data-keyCode="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-keyCode="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('bgColor');
}

function removeBackground(e) {
    let key = document.querySelector(`.key[data-keyCode="${e.keyCode}"]`);
    key.classList.remove('bgColor');
}