const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');
const h1 = document.querySelector('h1');

noButton.addEventListener('click', moveButton);
yesButton.addEventListener('click', displayYes);

function moveButton() {
    this.classList.add('click1');
    noButton.addEventListener('click', moveButton2);
};

function moveButton2() {
    this.classList.add('click2');
    this.classList.remove('click1');
    noButton.addEventListener('click', moveButton3);
};

function moveButton3() {
    this.classList.add('click3');
    this.classList.remove('click2');
    noButton.addEventListener('click', moveButton4);
};

function moveButton4() {
    this.classList.add('click4');
    this.classList.remove('click3');
    noButton.addEventListener('click', removeButton);
};

function removeButton() {
    this.classList.add('remove');
};

function displayYes() {
    this.classList.add('remove');
    h1.textContent = 'I knew it. Fuckin idiot. 😂';
};
