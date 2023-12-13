import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ApiRestService } from 'src/app/servicios/api-rest.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userInfo: any;

  constructor(private storage: Storage, private apiService: ApiRestService) {}

  ngOnInit() {
    // Load user information from Ionic Storage
    this.storage.get('userData').then((userData) => {
      this.userInfo = userData;
      
      // If the user has information, make a request to the API to get more details
      if (this.userInfo) {
        this.apiService.obtenerAsesor().subscribe(
          (estudianteDetails) => {
            // Assign detailed information of the student
            this.userInfo.nombre_completo = estudianteDetails.nombre_completo;
            this.userInfo.rut = estudianteDetails.rut;
          },
          (error) => {
            console.error('Error fetching student details:', error);
          }
        );
      }
    });
  }
}
