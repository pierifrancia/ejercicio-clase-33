let noviembre = "noviembre";
let diciembre = "diciembre";

const nombre = prompt ("Por favor ingresa tu nombre");
let anio = prompt ("Ahora ingresa tu año de nacimiento");
const mes = prompt ("Por ultimo ingresa tu mes de nacimiento");

Number(anio);

(mes!=noviembre && mes!=diciembre) && alert("Tu edad es " +(2019-anio) + " años");

(mes==noviembre || mes==diciembre) && alert("Tu edad es " +(2019-anio-1) + " años");
