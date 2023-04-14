document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("formulario-sorteador").addEventListener('submit', (e)=>{
        e.preventDefault();
        const numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        let randomNumber = Math.floor(Math.random() * numeroMaximo + 1);
        document.querySelector('.resultado > span').innerHTML = randomNumber;
        document.querySelector('.resultado').style.display = 'block';
    })
});