const QUANTIDADE =  document.getElementById('quantidade');
const PRECO = document.getElementById('preco');

function add() {
    let q = Number(QUANTIDADE.innerHTML) + 1;

    QUANTIDADE.innerHTML = q;
    PRECO.innerHTML = 16.75 * q;
}

function remove() {
    let q = Number(QUANTIDADE.innerHTML) - 1;

if (q === 0) {
    return;
}


    QUANTIDADE.innerHTML = q;
    PRECO.innerHTML = 16.75 * q;
}