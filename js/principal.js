/* un empleado se le concoce su nombre, su monto de ventas y su porcentaje a aplicarse
calcular el bono y mostrar el nombre, el monto de la venta y el bono*/

import CL_Empleado from "./CL_Empleado.js";
import CL_IEmpleado from "./CL_IEmpleado.js";

let iempl =  new CL_IEmpleado(),
        n=iempl.leerNombre(),
        mv=iempl.leerMontoVenta(),
        p=iempl.leerPorcentaje(),

    empl = new CL_Empleado(n,mv,p),
    salida = document.getElementById("salida");
    

    salida.innerHTML = iempl.reporteEmpleado(empl.nombre,empl.montoVenta,empl.bono());


