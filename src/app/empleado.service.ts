import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  //Esta URL obtiene el listado de todos los empleados en el backend
 private baseUrl = "http://localhost:8080/api/v1/empleados";
  constructor(private httpClient : HttpClient) { }


  //este metodo nos sirve para obtener los empleados
  obtenerListaDeEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`)
  }

  //este metodo nos sirve para registrar un empleado
  registrarEmpleado(empleado:Empleado) : Observable<Object>{

    return this.httpClient.post(`${this.baseUrl}`,empleado)

  }

  eliminarEmpleado(id:number) : Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  actualizarEmpleado(id:number,empleado:Empleado):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,empleado);
  }
  obtenerEmpleadoPorId(id:number):Observable<Empleado> {
    return this.httpClient.get<Empleado>(`${this.baseUrl}/${id}`);
  }

 
}
