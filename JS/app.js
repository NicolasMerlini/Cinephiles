let user = [];


function crearUsuario(email) {
  
  let usuario = {
    email: email.value,
    password: password.value,
  }

  user.push(usuario)

  localStorage.setItem("UsuarioNuevo", JSON.stringify(user))

  email.value = ""
  password.value = ""
}



function validarUsuario(email1) {
  let uuseer = []
  let uservalidado = {
    email: email1.value,
    password: password1.value,
  }

  console.log(uservalidado)

  uuseer.push(uservalidado)

  console.log(uuseer)

  let users = JSON.parse(localStorage.getItem("UsuarioNuevo"))

  console.log(users)
  
  for (let i = 0; i < users.length; i++) {
    if (users[i] == uuseer[i]) {
      alert("Excelente")
    }
    else {
      alert("Siga participando")
      }
    
  }
  
}

