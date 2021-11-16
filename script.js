let figure = document.getElementById('figure')
let typeFigure = document.getElementById('typeFigure')
let colorFigure = document.getElementById('colorFigure')
let applyBtn = document.getElementById('applyBtn')

window.addEventListener('click', function() {
    function applyChanges() {
        figure.classList.remove(...figure.classList);
        figure.classList.add(typeFigure.value);
        figure.style.backgroundColor = colorFigure.value || '#000000';
    }
    if (figure && typeFigure && colorFigure && applyBtn) {
        applyBtn.addEventListener('click', applyChanges)
    }
});
