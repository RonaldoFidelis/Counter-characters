let input = document.querySelector('#input');
let counter = document.querySelector('.counter');
let btnMode = document.querySelector('.mode');
let mode = 'Char';
let count = 0;
input.addEventListener('input', () => {
    if(mode === 'Char'){
        count = input.value.length;
        counter.textContent = `${count} Caractere(s)`;
    } else {
        let word = input.value.trim().split(/\s+/);
        count = input.value.trim() === '' ? 0:word.length;
        counter.textContent = `${count} Palavra(s)`
    };
})

btnMode.addEventListener('click', () => {
    if(mode === 'Char'){
        mode = 'Word';
        btnMode.textContent = 'Contar Caracteres'
        input.focus();
    }else {
        mode = 'Char';
        btnMode.textContent = 'Contar Palavras'
        input.focus();
    }
    input.dispatchEvent(new Event('input'));
});