window.addEventListener('load', function (event) {
    fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(data => {

            data.forEach(element => {
                let text = document.createElement('p');
                let div = document.getElementById("containerJS");
                let texto = `Nombre: ${element.nombre}  Apellido: ${element.nombre}</br> Telefono: ${element.telefono} `;
                text.innerHTML = texto;
                div.appendChild(text);
            });
        });
});

function reaload() {
    fetch('http://www.raydelto.org/agenda.php')
        .then(response => response.json())
        .then(data => {

            data.forEach(element => {
                let text = document.createElement('p');
                let div = document.getElementById("containerJS");
                let texto = `Nombre: ${element.nombre}  Apellido: ${element.nombre}</br> Telefono: ${element.telefono} `;
                text.innerHTML = texto;
                div.appendChild(text);
            });
        });
}

function save() {
    let data = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        telefono: document.getElementById('telefono').value,
    }

    fetch('http://www.raydelto.org/agenda.php', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }),

        body: JSON.stringify(data)
    }).then(data => {
        window.reaload();
    });
} 
