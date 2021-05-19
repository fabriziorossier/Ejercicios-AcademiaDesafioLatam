$(Document).ready(function() {
    // Smooth Scroll
    $("a").click(function(event) {
        // alert(this.hash) // DEBUG - Arroja un alert al hacer click en un link con lo que sigue al # en el atributo href del link
        
        // Con este if se asegura que this.hash tenga un valor antes de anular el comportamiento predeterminado
        if (this.hash !== "") {
            // Previene el comportamiento de click predeterminado
            event.preventDefault();
            // Guarda el valor del hash en una variable llamada seccionLink
            var seccionLink = this.hash;
            // Usa el metodo animate para animar el scroll y hacerlo de una forma suave
            // El numero opcional 800 especifica el numero de milisegundos que se demorara en llegar hasta el area
            $('html, body').animate({
                scrollTop: $(seccionLink).offset().top
            }, 800, function(){
                // Agrega hash (#) a la URL cuando haya terminado de desplazarse (comportamiento de click predeterminado)
                window.location.hash = seccionLink;
            });
        } // Fin del if
    });

    // Popovers
    $('[data-toggle="popover"]').popover();
});