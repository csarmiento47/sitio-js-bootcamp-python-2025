function indicadoresEconomicos() {
    fetch('https://mindicador.cl/api')
    .then(function(response) {
        return response.json();
    })
    .then(function(dailyIndicators) {
        console.log(dailyIndicators);

        document.getElementById('indicador-uf').innerHTML = dailyIndicators.uf.nombre;
        document.getElementById('unidad-uf').innerHTML = dailyIndicators.uf.unidad_medida;
        let uf = new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dailyIndicators.uf.valor);
        document.getElementById('valor-uf').innerHTML = uf;

        document.getElementById('indicador-dolar').innerHTML = dailyIndicators.dolar.nombre;
        document.getElementById('unidad-dolar').innerHTML = dailyIndicators.dolar.unidad_medida;
        let dolar = new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dailyIndicators.dolar.valor);
        document.getElementById('valor-dolar').innerHTML = dolar;

        document.getElementById('indicador-euro').innerHTML = dailyIndicators.euro.nombre;
        document.getElementById('unidad-euro').innerHTML = dailyIndicators.euro.unidad_medida;
        let euro = new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dailyIndicators.euro.valor);
        document.getElementById('valor-euro').innerHTML = euro;

        document.getElementById('indicador-utm').innerHTML = dailyIndicators.utm.nombre;
        document.getElementById('unidad-utm').innerHTML = dailyIndicators.utm.unidad_medida;
        let utm = new Intl.NumberFormat('es-CL',{style:'currency',currency:'CLP',maximumFractionDigits:2}).format(dailyIndicators.utm.valor);
        document.getElementById('valor-utm').innerHTML = utm;

        document.getElementById('indicador-ipc').innerHTML = dailyIndicators.ipc.nombre;
        document.getElementById('unidad-ipc').innerHTML = dailyIndicators.ipc.unidad_medida;
        document.getElementById('valor-ipc').innerHTML = dailyIndicators.ipc.valor+'%';

    })
    .catch(function(error) {
        console.log('RequestFailed',error);
    })
    .finally(function() {
        console.log('Adios');
    });
}