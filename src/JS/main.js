var usuario = document.getElementById('user')
var pass = document.getElementById('password')
var enviar = document.getElementById('enviar')


var users = [
    {user: 'Mali', password: '123', saldo: 200},
    {user: 'Gera', password: '1234', saldo: 290},
    {user: 'Maui', password: '12', saldo: 67},
    {user: 'juan', password: 'hola123', saldo: 400}
]

const login = () => {
    if(usuario.value != '' && pass.value != ''){
        for(const key in users){
            if(users[key].user == usuario.value && users[key].password == pass.value){
                window.open('http://127.0.0.1:5500/cajeroAutomatico/src/components/perfil/perfil.html', "_self");
                localStorage.setItem('usuario', users[key].user);
                localStorage.setItem('password', users[key].password)
                localStorage.setItem('saldo', users[key].saldo)
            }
            // else if(users[key].user != usuario.value){
            //    if(users[key].user != usuario.value){
            //         alert('Usuario incorrecto, verifique el usuario')
            //     }else{
            //         alert('Contraseña Incorrecta, verifique la contraseña')
            //     }
            // }
        }
    }else{
        if(usuario.value == ''){
            alert('Proporcione informacion en el campo de usuario')
        }else{
            alert('Proporcione informacion en el campo de contraseña')
        }
    }
}


enviar.addEventListener('click', (event) => {
    event.preventDefault()
    login()
    usuario.value = '';
    pass.value = '';
})