function changeColor() {
    const box = document.getElementById('box');
    const currentColor = box.style.backgroundColor;
    box.style.backgroundColor = currentColor === 'lightblue' ? 'lightcoral' : 'lightblue';
}

function changeText(element) {
    element.textContent = 'Hi';
}

function resetText(element) {
    element.textContent = 'Hover Over Me';
}

function toggleVisibility() {
    const paragraph = document.getElementById('paragraph');
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}

function toggleBoxColor() {
    const box = document.getElementById('color-toggle-box');
    const currentColor = box.style.backgroundColor;
    box.style.backgroundColor = currentColor === 'lightgreen' ? 'lightblue' : 'lightgreen';
}

