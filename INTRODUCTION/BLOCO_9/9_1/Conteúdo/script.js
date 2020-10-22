// criando um botão e formatando ele através de uma função de callback antes de inserir no body


function newbutton(text, callback) {
    const body = document.querySelector('body');
    const button = document.createElement('button');
    button.textContent = text;

    callback(button);

    body.insertAdjacentElement("beforeend", button);
}

newbutton('Login', (button) => {
    button.style.cssText = `
    font-size: 40px;
    color: green;
    `
    button.style.backgroundColor = 'red';

    button.addEventListener("click", () => {
        console.log("Clicando no botão de Login");
    })
});

newbutton("Signup", (button) => {
    button.style.cssText = `
    font-size: 70px;
    color: purple;
    `
    button.style.backgroundColor = 'yellow';

    button.addEventListener("click", () => {
        console.log("Clicando no botão de Signup");
    })
})