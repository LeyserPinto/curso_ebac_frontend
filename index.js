
const ViewFormulario = document.getElementById('form-modulo7');
const ViewCampoA = document.getElementById('campoA');
const ViewCampoB = document.getElementById('campoB');
const ViewContenedorMessagem = document.querySelector('.Message');
ViewFormulario.addEventListener('submit',(e)=>{
   e.preventDefault();

   
   ViewCampoA.value < ViewCampoB.value ? ExibirMessageErro() : ExibirMessageSucesso()
   
});


function ExibirMessageSucesso(){
    //alert('Formulario Enviado com Sucesso');
    ViewContenedorMessagem.style.background = 'green';
    ViewContenedorMessagem.innerHTML='Formulario Enviado com Sucesso';
    ViewContenedorMessagem.style.display='block';

    setTimeout(()=>{
        location.reload();
    },3500)
}
function ExibirMessageErro(){
    //alert('Erro: Campo A não Pôde ser Menor ou igual que Campo B');
    ViewContenedorMessagem.style.background = 'red';
    ViewContenedorMessagem.innerHTML='Erro: <b>Campo A</b> não Pôde ser Menor ou igual que <b>Campo B</b>';
    ViewContenedorMessagem.style.display='block';
}