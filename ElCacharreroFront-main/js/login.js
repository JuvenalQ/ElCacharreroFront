//#region  ingresar usuario  
$("#login").click(function () {
  //Validaciones 
  if ($.trim($("#email").val()) == "" || $.trim($("#password").val()) == "") {

    if ($.trim($("#email").val()) == "" && $.trim($("#password").val()) == "") {
      alert("Por favor ingrese el correo y la contraseña");
    } else if ($.trim($("#email").val()) == "") {
      alert("Por favor ingrese el correo");
    } else if ($.trim($("#password").val()) == "") {
      alert("Por favor ingrese la contraseña");
    }
  } else {

    let datos = {
      email: $("#email").val(),
      password: $("#password").val()
    }
    $.ajax({
      url: "http://localhost:8080/api/user/" + datos.email + "/" + datos.password,
      method: "GET",
      dataType: "json",
      success: function (response) {
        console.log(response);
        if (response.name == "NO DEFINIDO") {

          alert("No estas registrado o ingresaste un valor equivocado");
        } else {
          alert("Bienvenido " + response.name);
          window.location.href = "../html/page1.html";
        }

      }
    });
  }
});
//#endregion

//#region registrar usuario
$("#guardar").click(function () {
  if ($.trim($("#emailRegistro").val()) == "" ||
    $.trim($("#usuarioRegistro").val()) == "" ||
    $.trim($("#contrasenaRegistro").val()) == "" ||
    $.trim($("#contrasenaRegistro2").val()) == "") {
    alert("Por favor ingrese todos los campos");

  } else {

    //validacion de contraseñas 
    if ($("#contrasenaRegistro").val() == $("#contrasenaRegistro2").val()) {

      //variable que obtiene los datos  a cargar 
      let datos = {
        email: $("#emailRegistro").val(),
        password: $("#contrasenaRegistro").val(),
        name: $("#usuarioRegistro").val()
      }
      $.ajax({
        url: "http://localhost:8080/api/user/new",
        method: "POST",
        dataType: "json",
        data: JSON.stringify(datos),
        contentType: "application/json",
        Headers: {
          "Content-Type": "application/json"
        },
        statusCode: {
          201: function (response) {// codigo de respuesta
            console.log(response);
          }
        }
      });
    } else {
      alert("Ups!!!. \nLas contraseñas no coinciden");
    }
  }
});
//#endregion





