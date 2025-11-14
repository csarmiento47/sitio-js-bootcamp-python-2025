$(document).ready(function() {

    //creamos la función que obtenga la fecha
    function mostrarFechaActualizable() {
        let fecha = new Date();

        $('#fecha_actualizable').text(fecha);
    }

    //Llamamos a la función un vez al cargar la página
    mostrarFechaActualizable();

    //Para actualizar la fecha cada 1 segundo...
    setInterval(mostrarFechaActualizable,1000);

    $('#parrafo01').mouseenter(function() {
        $(this).css('color','red');
    });

    $('#parrafo01').mouseleave(function() {
        $(this).css('color','black');
    });

    $('#parrafo02').on('mouseenter', function() {
        $(this).addClass('text-danger fw-bold');
    });

    $('#parrafo02').on('mouseleave', function() {
        $(this).removeClass('text-danger fw-bold');
    });

    $('#ampolleta').on('mouseenter', function() {
        $(this).prop('src','assets/img/pic_bulbon.gif').prop('alt','Luz encendida');
    });

    $('#ampolleta').on('mouseleave', function() {
        $(this).prop('src','assets/img/pic_bulboff.gif').prop('alt','Luz apagada');
    });

    $('#parrafo03').on('mouseenter',function() {
        $(this).append('Este texto apareció de la nada.... ');
    });

    $('#button01').on('click', function() {
        let mi_frase = $('#frase_ingresada').val();
        $('#frase').text(mi_frase).addClass('text-primary');
        $('#frase_ingresada').val('');
        alert(mi_frase);
    });

    $('#button02').on('click', function() {
        let ancho = screen.width;
        let alto = screen.height;
        $('#parrafo04').text(`Tu resolución de pantalla es ${ancho}x${alto}`);
    });

    $('#button03').on('click', function() {
        $('#parrafo05').hide(2000);
    });

    $('#button04').on('click', function() {
        $('#parrafo05').show(2000);
    });

    $('#button05').on('click', function() {
        $('#ampolleta02').toggle(2000);
    });

    $('#button06').on('click', function() {
        $('#ampolleta03').slideDown(2000);
    });

    $('#button07').on('click', function() {
        $('#ampolleta04').slideUp(2000);
    });

    $('#button08').on('click', function() {
        $('#lista_paises').slideToggle(2000);
    });

    $('#button09').on('click', function() {
        $('#parrafo06').before('<p>Este es un nuevo párrafo...</p>');
    });

    $('#button10').on('click', function() {
        $('#parrafo07').after('<p>Este es un nuevo párrafo...</p>');
    });

    $('#button11').on('click', function() {
        $('#parrafo08').append('<li>Este es un nuevo párrafo...</li>');
    });

    $('#button12').on('click', function() {
        $('#parrafo09').before('Este es un nuevo párrafo...');
    });



})