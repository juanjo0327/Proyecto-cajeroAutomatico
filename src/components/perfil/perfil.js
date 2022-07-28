var usuario = localStorage.getItem('usuario');
var password = localStorage.getItem('password');
var saldo = localStorage.getItem('saldo');

const bienvenido = document.getElementById('bienvenido');
const consultar = document.getElementById('consultar');
const contenido = document.getElementById('contenido');
const ingresar = document.getElementById('ingresar');
const retirar = document.getElementById('retirar');
const nuevoMonto = document.getElementById('nuevoMonto');
const salir = document.getElementById('salir')


bienvenido.textContent = 'Bienvenid@, ' + usuario;

consultar.style.backgroundColor = 'rgb(105, 255, 214)';
ingresar.style.backgroundColor = '';
retirar.style.backgroundColor = '';
consultar.style.borderRadius = '5px';

contenido.innerHTML = `
    <h3>El saldo actual de tu cuenta es:</h3><h2 class="dinero" id="monto">${saldo}</h2>
`;

consultar.addEventListener('click', (event) => {
    event.preventDefault();
    var nuevoSaldo = localStorage.getItem('saldo');
    
    consultar.style.backgroundColor = 'rgb(105, 255, 214)';
    ingresar.style.backgroundColor = '';
    retirar.style.backgroundColor = '';
    consultar.style.borderRadius = '5px';

    contenido.innerHTML = `
        <h3>El saldo actual de tu cuenta es:</h3><h2 class="dinero" id="monto">${nuevoSaldo}</h2>
    `;
    nuevoMonto.innerHTML = ``;
})

ingresar.addEventListener('click', (event) => {
    event.preventDefault();
    ingresar.style.backgroundColor = 'rgb(105, 255, 214)';
    ingresar.style.borderRadius = '5px';
    consultar.style.backgroundColor = '';
    retirar.style.backgroundColor = '';


    contenido.innerHTML = `
        <h3 id="bienvenidoIngresar">Bienvenido a la interfaz de Ingresar Dinero</h3>

        <form id="formulario">
            <span>Ingresa el monto a depositar: </span>
            <input type="text" onkeypress="return event.charCode>=48 && event.charCode<=57" placeholder="Ingresar monto" id="montoIngresar">
            <input type="button" value="depositar" id="depositar">
            <input type="button" value="borrar" id="borrar">
        </form>
    `;
    nuevoMonto.innerHTML = ``;

    var montoIngresar = document.getElementById('montoIngresar')
    var deposito = document.getElementById('depositar')
    var borrar = document.getElementById('borrar')


    deposito.addEventListener('click', (event) => {
        event.preventDefault();
        if(montoIngresar.value != ''){
            var nuevoSaldo = localStorage.getItem('saldo');
            var monto = parseInt(montoIngresar.value);
            var res = 0;
            var imprimirSaldo = parseInt(nuevoSaldo)
            res = parseInt(nuevoSaldo) + monto;

                if( res < 991){

                    nuevoMonto.innerHTML = `
                        <div>
                            <span>Monto Anterior: <span><span> $${imprimirSaldo}<span>
                        </div>
                        <div>
                            <span>Monto Ingresado: <span> <span> $${monto}<span>
                        </div>
                        <div>
                            <span >Nuevo Saldo: <span><span>$${res}<span> 
                        </div>
                        `;
                    localStorage.setItem('saldo', res)
        
                    montoIngresar.value = '';
                }else{
                    alert('Error!!, No puedes tener mas de $990');
                    montoIngresar.value = '';
                    nuevoMonto.innerHTML = `
                        <div>
                            <span>Monto Actual: <span><span> $${imprimirSaldo}<span>
                        </div>
                    `;
                }
            
        }else{
            alert('ERROR!!!, ingrese una cantidad en el input')
        }
    })    
    borrar.addEventListener('click', (event) => {
        event.preventDefault();
        montoIngresar.value = '';
    })
})



retirar.addEventListener('click', (event) => {
    event.preventDefault();

    retirar.style.backgroundColor = 'rgb(105, 255, 214)';
    ingresar.style.backgroundColor = '';
    consultar.style.backgroundColor = '';
    retirar.style.borderRadius = '5px';
    
    contenido.innerHTML = `
        <h3>Bienvenido a la interfaz de Retiro de Dinero</h3>

        <form id="formulario">
        <span>Ingresa el monto a retirar: </span>
        <input type="text" onkeypress="return event.charCode>=48 && event.charCode<=57" placeholder="Ingresar monto" id="montoRetirar">
        <input type="button" value="retirar" id="retiro">
        <input type="button" value="borrar" id="borrar">
        </form>
    `;

    nuevoMonto.innerHTML = ``;

    var montoRetirar = document.getElementById('montoRetirar')
    var retiro = document.getElementById('retiro')
    var borrar = document.getElementById('borrar')
    
    retiro.addEventListener('click', (event) => {
        event.preventDefault();
        if(montoRetirar.value != ''){
            var nuevoSaldo = localStorage.getItem('saldo');
            var monto = parseInt(montoRetirar.value);
            var res = 0;
            res = parseInt(nuevoSaldo) - monto;
            var imprimirSaldo = parseInt(nuevoSaldo)

            if( res > 10){
                nuevoMonto.innerHTML = `
                    <div>
                        <span>Monto Anterior: <span><span> $${imprimirSaldo}<span>
                    </div>
                    <div>
                        <span>Monto Retirado: <span> <span> $${monto}<span>
                    </div>
                    <div>
                        <span >Nuevo Saldo: <span><span>$${res}<span> 
                    </div>
                `;
                localStorage.setItem('saldo', res)
    
                montoRetirar.value = '';
            }else{
                alert('Error!!, No puedes tener menos de $10');
                montoRetirar.value = '';
                nuevoMonto.innerHTML = `
                    <div>
                        <span>Monto Actual: <span><span> $${imprimirSaldo}<span>
                    </div>
                `; 
            }
        }else{
            alert('ERROR!!!, ingrese una cantidad en el input')
        }
    })  
    borrar.addEventListener('click', (event) => {
        event.preventDefault();
        montoRetirar.value = '';
    })
})

salir.addEventListener('click', (event) =>{
    event.preventDefault();
    localStorage.clear()
    window.open('http://127.0.0.1:5500/index.html', "_self");

})