
 function suma() {

    let cantidad = document.getElementById('cantidad').value;
    let categoria = document.getElementById('categoria');
    let estudiante = 200 - 200 * 0.80;
    let general = 200;
    let Trainee = 200 - 200 * 0.50;
    let Junior = 200 - 200 * 0.15;

   let totalAPagar = 0;

   if (cantidad > 0) {
      if (categoria.value == 1) {
      totalAPagar = cantidad * estudiante;
   } else if (categoria.value == 2) {
      totalAPagar = cantidad * Trainee;
   } else if (categoria.value == 3) {
      totalAPagar = cantidad * Junior;
   } else if (categoria.value == 0) {
      totalAPagar = cantidad * general;
   }
   } else {
      alert('Ingrese un número positivo');
   }

   return document.getElementById('totalPag').innerText = 'Total a Pagar: $ ' + totalAPagar;
   //return totalAPagar;
   //console.log('el total a pagar es ' + totalAPagar);
 }

 //function limpiar() {
   //document.getElementById('totalPag').textContent = 'Total a Pagar: $ ';
   //document.getElementById('formulario').reset();
 //}
 
 
 function limpiar() {
   const formulario = document.getElementById('formulario');
   formulario.reset();
   const parrafo = document.getElementById('totalPag');
       parrafo.textContent = 'Total a Pagar: $';
 }
var botonBorrar= document.getElementById("btnLimpiar");
 //botonBorrar.addEventListener('click', limpiar)


 //var y = document.getElementById('btnLimpiar');
 //y.addEventListener('click', limpiar);

 //var q = document.getElementById('btnResumen');
 //q.addEventListener('click', suma);


 // para poder enviar y obtener el total

 function dblcl() {
   return document.getElementById('botRes').innerText = 'haga doble click para ver el total';
}


//validar formulario
function validarForm(){

   var expRegNombre=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   var expRegApellidos=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   var expRegCorreo=/^\w+@(\w+\.)+\w{2,4}$/; 
 
 
      var nombre = document.getElementById("inputNombre");
      var apellidos = document.getElementById("inputApellido");
      var correo = document.getElementById("inputEmail");

      if (!nombre.value && !expRegNombre.exec(nombre.value) && !apellidos.value && !expRegApellidos.exec(apellidos.value) && !correo.value && !expRegCorreo.exec(correo.value)) {
         alert("Por favor, llene los campos");
         nombre.focus();
         apellidos.focus();
         correo.focus();
         return false;
      }
      //Campo nombre
      if(!nombre.value)
      {
       alert("El campo nombre es requerido");
       nombre.focus();
       return false;
      }
      if (!expRegNombre.exec(nombre.value))
      {
         alert("El campo nombre admite letras y espacios.")
         nombre.focus();
         return false;
      }
      //Campo apellido
      if(!apellidos.value)
      {
       alert("El campo apellidos es requerido");
       apellidos.focus();
       return false;
      }
      if(!expRegApellidos.exec(apellidos.value))
      {
        alert("El campo apellidos admite letras y espacios.")
        apellidos.focus();
        return false;
      }
 
 
      //campo email
      if(!correo.value)
      {
       alert("El campo correo es requerido");
       correo.focus();
       return false;
      }
      if(!expRegCorreo.exec(correo.value))
      {
        alert("El campo correo no tiene el formato correcto.")
        correo.focus();
        return false;
      }
 
      return true;
   }



   // asociacion del boton enviar con el formulario en html//
   window.onload = function()
   { 
      
     var formu = document.getElementById("btnResumen");
     formu.addEventListener('click', validarForm);
     // párrafo para saber cómo obtener el total
     formu.addEventListener('click', dblcl);
     //alert('para saber el total haga dobleclick');
     //doble click para ver el total
     formu.addEventListener('dblclick', suma);
     //formu.onsubmit = validarForm;
   }



   
   
   
   //alert("Enviando");
    //document.contacto_frm.submit();
   
     //}
     // asociacion del boton enviar con el formulario en html//
     //window.onload = function()
     //{ 
       //var botonEnviar;
       //botonEnviar = document.contacto_frm.btnResumen;
       //botonEnviar.onclick = validarForm;
     //}