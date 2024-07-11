export default class CL_IEmpleado{
    
    leerNombre(){
        return prompt("ingrese el nombre del empleado");
    }
    leerMontoVenta(){
        return prompt("ingrese el monto de la venta");
    }
    leerPorcentaje(){
        return prompt("ingrese el porcentaje de bono");
    }

    reporteEmpleado(n,mv,b){
        return ` 
        <br> Nombre:  ${n}
        <br> Monto de la venta:  ${mv}
        <br>  Bono:  ${b} 
        `
        }
}