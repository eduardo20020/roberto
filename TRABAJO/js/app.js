var miboton = document.getElementById('boton');
var mispan = document.getElementById('temperatura');
var num = 1;



miboton.addEventListener("click", function(event) {
    fetch('http://api.weatherstack.com/current?access_key=72c97789f84a8589f0685e395c4aae6a&query=garcia,mexico')
    .then(cosa => cosa.json())
    // La siguiente función then maneja el resultado convertido a JSON
    .then(cosa2 => {
        mispan.innerHTML = cosa2.current.temperature
    })

});

