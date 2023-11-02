document.getElementById("tipo_seguro").addEventListener("change", function() {
    const tipoSeguro = this.value;
    const valorSeguro = document.getElementById("valor");
    
    if (tipoSeguro === "basico") {
       valorSeguro.innerHTML='Valor basico $500'
        // valorSeguro.value = "$500";
    } else if (tipoSeguro === "intermedio") {
      valorSeguro.innerHTML='Valor intermedio $1000'
        // valorSeguro.value = "$1000";
    } else if (tipoSeguro === "premium") {
        // valorSeguro.value = "$1500";
        valorSeguro.innerHTML='Valor premium $1500'
    }
});

document.getElementById("enviar").addEventListener("click",()=>alert("Mensaje enviado"));

