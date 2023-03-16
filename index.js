
$(document).ready(() => {
    $('#carousel').slick({
        autoplay: true,
    })
    $('#ftel').mask('(00) 00000-0000');
    $('#fcpf').mask('000.000.000-00');
    $('#fcep').mask('00000-000');

})

$('.Card button,.pCard button').click(()=>{
    console.log('on Scroll');
    const destino = $('#contato');

    $('html').animate({
        scrollTop:destino.offset().top
    },1000)
})
$('#hamburguer-menu').click(() => {
    $('header nav').slideToggle();
})

$('form').validate({ // seletor do formulário
    rules: {
        nome: {
            required: true,
        },
        email: {
            email: true,
            required: true,
        },
        tel:{
            required:true
        },
        cpf:{
            required:true
        }

    },
    messages: { // Opcional, customize as mensagens de erro
        nome: 'Por favor, insira o seu nome',
        email: 'Insira Email valido',
        tel: 'Insira Número Telefone valido',
        cpf: 'Insira CPF valido',
    }
});