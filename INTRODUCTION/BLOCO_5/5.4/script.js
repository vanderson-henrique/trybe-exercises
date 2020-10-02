const body = document.querySelector('.content');
document.getElementById('yellow').addEventListener('click', () => {
    body.style.backgroundColor = 'yellow';
});

document.getElementById('white').addEventListener('click', () => {
    body.style.backgroundColor = 'white';
})

document.getElementById('blue').addEventListener('click', () => {
    body.style.backgroundColor = 'blue';
})

document.getElementById('pink').addEventListener('click', () => {
    body.style.backgroundColor = 'pink';
})

document.getElementById('black').addEventListener('click', () => {
    body.style.backgroundColor = 'black';
})

document.getElementById('ct-white').addEventListener('click', () => {
    body.style.color = 'white';
})

document.getElementById('ct-black').addEventListener('click', () => {
    body.style.color = 'black';
})

document.getElementById('pequena').addEventListener('click', () => {
    body.style.fontSize = '1em';
})

document.getElementById('media').addEventListener('click', () => {
    body.style.fontSize = '1.2em';
})

document.getElementById('grande').addEventListener('click', () => {
    body.style.fontSize = '1.5em';
})

document.getElementById('pt25').addEventListener('click', () => {
    body.style.lineHeight = '25pt';
})

document.getElementById('pt30').addEventListener('click', () => {
    body.style.lineHeight = '30pt';
})

document.getElementById('times').addEventListener('click', () => {
    body.style.fontFamily = 'Times New Roman';
})

document.getElementById('arial').addEventListener('click', () => {
    body.style.fontFamily = 'Arial';
})
