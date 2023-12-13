import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiRestService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
 })
 export class UsuariosPage implements OnInit {
 
  estudiantes: any[] = []
  estudiantesFiltrados: any[] = []
 
  constructor(
     private http: HttpClient,
     private api: ApiRestService,
     public alertController: AlertController
     ) { }
 
  ngOnInit() {
     this.api.obtenerAsesor().subscribe((res: any)=>{
       console.log(res);
       this.estudiantes = res.result;
       this.estudiantesFiltrados = this.estudiantes;
     })
  }
 
  buscarEstudiante(evento: any) {
     this.estudiantesFiltrados = this.estudiantes.filter(estudiante => estudiante.rut.includes(evento.detail.value));
  }
 
  async mostrarDetalles(estudiante: any) {
    console.log('Mostrando detalles del estudiante:', estudiante);
    const alert = await this.alertController.create({
       header: 'Detalles del estudiante',
       message: `
         RUT: ${estudiante.rut}
         Nombre: ${estudiante.nombre_completo}
         Correo electrónico: ${estudiante.correo}
       `,
       buttons: ['OK']
    });
   
    await alert.present();
   }
}