let figure = document.querySelector('.figure');
let button = document.querySelector('.button');
let selectElement = document.querySelector('.custom_select');

selectElement.addEventListener('change', (event) => {
    figure.setAttribute('class', 'figure ' + event.target.value);
});

button.onclick = function colorChoice() {
    let shapeColor = document.querySelector('input').value;
    figure.style.backgroundColor = shapeColor;
}