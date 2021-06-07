$(Document).ready(function(){
    // Popovers
    $('[data-toggle="popover"]').popover();

    // Cambio de color de los elementos H3 al doubleclick
    $("h3").dblclick(function(){
        $(this).css("color","#F93154");
    });

    // Aparecer/desaparecer el texto de las tarjetas al click sobre el titulo de cualquiera de estas
    $(".card-title").click(function(){
        $(".card-text").toggle();
    });

    // Muestra alerta al click sobre el boton de "Enviar por correo"
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente...");
    });
});