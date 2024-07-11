export default class CL_Empleado {
    constructor(nombre,montoVenta,porcentaje){
        this.nombre=nombre;
        this.montoVenta=montoVenta;
        this.porcentaje=porcentaje;
    }

    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set montoVenta(mv){
        this._montoVenta=+mv;
    }
    get montoVenta(){
        return this._montoVenta;
    }
    set porcentaje(p){
        this._porcentaje=+p;
    }
    get porcentaje(){
        return this._porcentaje;
    }

    bono(){
        return this.montoVenta*this.porcentaje;
    }   
}