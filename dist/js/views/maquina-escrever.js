function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 45 * i);
    });
}
let p = document.querySelectorAll('.titulo__apresentacao');
p.forEach((e) => {
    typeWriter(e);
});
