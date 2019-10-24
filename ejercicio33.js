let noviembre = "noviembre";
let diciembre = "diciembre";

const nombre = prompt ("Por favor ingresa tu nombre");

nombre == "" && alert ("No ingresaste tu nombre");

nombre == "" && prompt ("Por favor ingresa tu nombre");

var anio = prompt ("Ahora ingresa tu año de nacimiento");

(anio == 0) && alert ("No ingresaste tu año de nacimiento");

anio = prompt ("Ahora ingresa tu año de nacimiento");

const mes = prompt ("Por ultimo ingresa tu mes de nacimiento");

mes == "" && alert ("No ingresaste tu mes de nacimiento");

mes == "" && prompt ("Por ultimo ingresa tu mes de nacimiento");

Number(anio);

(mes != noviembre && mes != diciembre && anio != 0) && alert ("Tu edad es " + (2019-anio) + " años");

(mes == noviembre || mes == diciembre) && alert ("Tu edad es " + (2019-anio-1) + " años");



