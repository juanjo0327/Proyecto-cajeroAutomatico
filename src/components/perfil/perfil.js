var usuario = localStorage.getItem('usuario');
var password = localStorage.getItem('password');
var saldo = localStorage.getItem('saldo');

const bienvenido = document.getElementById('bienvenido');
const consultar = document.getElementById('consultar');
const contenido = document.getElementById('contenido');
const ingresar = document.getElementById('ingresar');



bienvenido.textContent = 'Bienvenido, ' + usuario;

consultar.addEventListener('click', (event) => {
    event.preventDefault();
    var nuevoSaldo = localStorage.getItem('saldo')

    contenido.innerHTML = `
    <h3>El saldo de tu cuenta es:</h3><h2 class="dinero" id="monto">${nuevoSaldo}</h2>
    `;
})

ingresar.addEventListener('click', (event) => {
    event.preventDefault();
    contenido.innerHTML = `
    <h3>Bienvenido a la interfaz de Ingresar Dinero</h3>

    <form id="formulario">
    <span>Ingresa el monto a depositar: </span>
    <input type="text" onkeypress="return event.charCode>=48 && event.charCode<=57" placeholder="Ingresar monto" id="montoIngresar">
    <input type="button" value="depositar" id="depositar">
    <input type="button" value="borrar" id="borrar">
    </form>
    `;

    var montoIngresar = document.getElementById('montoIngresar')
    var deposito = document.getElementById('depositar')
    var borrar = document.getElementById('borrar')


    deposito.addEventListener('click', (event) => {
        event.preventDefault();
        if(montoIngresar.value != ''){
            var nuevoSaldo = localStorage.getItem('saldo');
            var monto = parseInt(montoIngresar.value);

            // var hola = 0;
            var res = 0;
            res = parseInt(nuevoSaldo) + monto;
            
            console.log(res)
            // console.log(typeof(parseInt(saldo)));
            // console.log(typeof(parseInt(montoIngresar.value)));
            // res = parseInt(saldo) + parseInt(montoIngresar.value);
            // console.log(res)
            // hola = nuevoSaldo + parseInt(saldo);
            // console.log(hola);
            // parseInt(saldo) + 
            // localStorage.setItem('saldo', res);
            // localStorage.setItem('saldo', nuevoSaldo);
            // console.log(localStorage.getItem('saldo'));


            // console.log(saldo)
            montoIngresar.value = '';
        }else{
            alert('ERROR!!!, ingrese una cantidad en el input')
        }
    })

    borrar.addEventListener('click', (event) => {
        event.preventDefault();
        montoIngresar.value = '';
    })
    
})



// const createSection = document.createElement('section')

// createSection.classList.add('Bienvenida')

// createSection.innerHTML = `

// `

// head.appendChild(createSection)
