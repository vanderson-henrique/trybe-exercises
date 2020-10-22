const promise = new Promise((resolve, reject) => {

    const number = Math.floor(Math.random() * 11);

    if (number > 10 || number <= 5) {
        return reject (console.log(`Que fracasso, nosso número foi: ${number}`));
    }

    resolve (console.log(`Que sucesso, nosso número foi ${number}`));
});