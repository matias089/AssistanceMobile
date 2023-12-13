import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http: HttpClient) { }

  urlApi = "https://duoc.grupodevcon.cl/API/v2/"
  token = "100"
  obtenerAsesor(): Observable<any>
  {
    return this.http.get(this.urlApi+"obtenerAsesores/"+this.token).pipe();
  }

  crearAsesor()
  {

  }

  modificarAsesor()
  {

  }

  eliminarAsesor()
  {

  }
}
