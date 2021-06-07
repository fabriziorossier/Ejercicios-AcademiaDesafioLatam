// Creacion del DIV contenedor
document.write("<div class='container'>");
    // Titulo del Desafio
    document.write("<h1>Notas finales</h1>");
    // Datos del Estudiantes
    document.write(`<br><h3 class='d-inline-block mr-3'>Nombre:</h3><h3 class='font-weight-normal d-inline-block'>${nombre} ${apellido}</h3>`);
    document.write(`<br><h3 class='d-inline-block mr-3'>Carrera:</h3><h3 class='font-weight-normal d-inline-block'>${carrera}</h3>`);
    // Creacion de la tabla con Bootstrap
    document.write("<table class='table'>");
        // Definicion de tabla con encabezado
        document.write("<thead class='bg-dark text-white'>");
            // con TR definimos las columnas de la tabla
            document.write("<tr>");
                // Definicion del tipo de dato que tendra cada columna y su encabezado
                document.write("<th scope='col'>Ramo</th>");
                document.write("<th scope='col'>Nota 1</th>");
                document.write("<th scope='col'>Nota 2</th>");
                document.write("<th scope='col'>Nota 3</th>");
                document.write("<th scope='col'>Promedio</th>");
            document.write("</tr>");
        document.write("</thead>");
        // Definicion del cuerpo con el contenido de la tabla segun la columna
        document.write("<tbody>");
            // Resultados del Ramo 1
            document.write("<tr>");
                document.write(`<th scope='row'>${ramos[0]}</th>`);
                for (i = 0; i < 3; i++) {
                    document.write(`<td>${notasRamo1[i]}</td>`);
                }
                document.write(`<td>${promedios[0]}</td>`);
            document.write("</tr>");

            // Resultados del Ramo 2
            document.write("<tr>");
                document.write(`<th scope='row'>${ramos[1]}</th>`);
                for (i = 0; i < 3; i++) {
                    document.write(`<td>${notasRamo2[i]}</td>`);
                }
                document.write(`<td>${promedios[1]}</td>`);

            // Resultados del Ramo 3
            document.write("<tr>");
            document.write(`<th scope='row'>${ramos[2]}</th>`);
            for (i = 0; i < 3; i++) {
                document.write(`<td>${notasRamo3[i]}</td>`);
            }
            // document.write(`<td></td>`); // Prefiero averiguar como seleccionar el undefined que dejar el espacio vacio en duro
            document.write(`<td>${promedios[2]}</td>`);
        document.write("</tr>");
            document.write("</tr>");
        document.write("</tbody>");
    document.write("</table>");

    // Mostrar la nota que el usuario necesita sacarse en la nota3 del ramo3 para aprobar segun la nota de aprobacion indicada para este ramo
    document.write(`<p>Para aprobar el ramo ${ramos[2]} con nota ${notasAprobacion[2]}, necesitas obtener un ${notaMinima} en la nota 3.</p>`);
document.write("</div>");

/* $(Document).ready(function(){
    $("")
}) */

// El mensaje final (“para aprobar el ramo [ramo]...”), también será calculado por el sistema en base a las dos notas ingresadas de ese ramo y la nota de aprobación indicada

// Bootstrap: Se debe utilizar adecuadamente el CDN para incluir Bootstrap al proyecto y utilizar los estilos para construir el encabezado, tabla.

// El código HTML será armado dinámicamente mediante JavaScript.

// Comentarios: Se debe documentar el código, utilizando la sintaxis adecuada.
