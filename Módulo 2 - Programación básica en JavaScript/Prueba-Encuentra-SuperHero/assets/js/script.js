const accessToken = 10165627659225226;

$(document).ready(function(){
    $("form").submit(function(event){
        event.preventDefault();
        limpiarCampos();
        let valorInput = $("#inputSuperHero").val();
        
        if (validar(valorInput) == true){
            $.ajax({
                type: "GET",
                url: `https://www.superheroapi.com/api.php/${accessToken}/` + valorInput,
                dataType: "json",
                success: function(data){
                    //console.log(data); // DEBUG
                    let poderesEstadisticas = data.powerstats;
                    
                    //console.log(`poderesEstadisticas: ${poderesEstadisticas}`); // DEBUG
                    //console.log(poderesEstadisticas); // DEBUG
                    
                    // Renderizar grafico con estadisticas del SuperHero
                    const configuracionGrafico = {
                        animationEnabled: true,
                        title: {
                            text: `Estadísticas de ${data.name}`
                        },
                        data: [{
                            type: "pie",
                            startAngle: 240,
                            yValueFormatString: "##0.00\"%\"",
                            indexLabel: "{label} {y}",
                            dataPoints: [
                                {y: `${poderesEstadisticas.combat}`, label: "Combate"},
                                {y: `${poderesEstadisticas.durability}`, label: "Durabilidad"},
                                {y: `${poderesEstadisticas.intelligence}`, label: "Inteligencia"},
                                {y: `${poderesEstadisticas.power}`, label: "Poder"},
                                {y: `${poderesEstadisticas.speed}`, label: "Velocidad"},
                                {y: `${poderesEstadisticas.strength}`, label: "Fuerza"}
                            ]
                        }]
                    }
                    var grafico = new CanvasJS.Chart("graficoSuperHero", configuracionGrafico);
                    grafico.render();
                    
                    // Renderizar tarjeta con informacion del SuperHero
                    $("#tarjetaSuperHero").remove();
                    $("#divTarjetaSuperHero").append(`
                    <div class="card mb-3" style="max-width: 540px;" id="tarjetaSuperHero">
                        <div class="row no-gutters">
                            <div class="col-12 col-md-4">
                                <img src="${data.image.url}" alt="Imagen del SuperHero ${data.name}" class="img-fluid">
                            </div>
                            <div class="col-12 col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${data.name}</h5>
                                    <ul class="list-group list-group-flush text-left">
                                    <li class="list-group-item"><span class="font-weight-bold">Primera aparición:</span> ${data.biography["first-appearance"]}</li>
                                    <li class="list-group-item"><span class="font-weight-bold">Ocupación:</span> ${data.work.occupation}</li>
                                    <li class="list-group-item"><span class="font-weight-bold">Altura:</span> ${data.appearance.height[1]}</li>
                                    <li class="list-group-item"><span class="font-weight-bold">Peso:</span> ${data.appearance.weight[1]}</li>
                                    <li class="list-group-item"><span class="font-weight-bold">Publicado por:</span> ${data.biography.publisher}</li>
                                    <li class="list-group-item"><span class="font-weight-bold">Conexiones:</span> ${data.connections["group-affiliation"]}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    `)
                },
                error: function(error){
                    console.log(error);
                }
            });
        };
    });
});

function validar(numero){
    let validacionOK = true;
    let valorValidacion = /^[0-9]+$/;

    if (valorValidacion.test(numero) == false || numero < 1 || numero > 731){
        document.querySelector("#errorBusqueda").innerHTML = "Debe ingresar un número valido, entre 1 y 731";
        validacionOK = false;
    }

    return validacionOK;
}

function limpiarCampos(){
    document.querySelector("#errorBusqueda").innerHTML = "";
}