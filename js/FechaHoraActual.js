function FechaHora (){
    fechaActual = new Date();
    mes = fechaActual.getMonth() + 1;
    anio = fechaActual.getFullYear();
    fecha = fechaActual.getDate();
    if(mes<10)mes="0"+mes;



    imprimible = anio + "/" + mes + "/" + fecha;

    //salida
    document.getElementById('mostrarFechaHora').innerHTML = imprimible;
}

function showTime(){
myDate = new Date();
hours = myDate.getHours();
minutes = myDate.getMinutes();
seconds = myDate.getSeconds();
if (hours < 10) hours = 0 + hours;

if (minutes < 10) minutes = "0" + minutes;

if (seconds < 10) seconds = "0" + seconds;

$("#HoraActual").text(hours+ ":" +minutes+ ":" +seconds);
setTimeout("showTime()", 1000);
}