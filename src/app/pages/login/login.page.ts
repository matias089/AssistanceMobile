import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from 'src/app/servicios/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isAlertOpen = false;
  public alertButtons = ['OK'];

  formLogin = {
    usuario: '',
    password: '',
  };

  datosReg: string = '';

  constructor(
    private router: Router,
    private storage: Storage,
    private rutaActiva: ActivatedRoute,
    private authService: AuthService
  ) {
    this.rutaActiva.queryParams.subscribe((params) => {
      if (params['nameUsuario']) {
        this.datosReg = params['nameUsuario'];
      }
    });
  }

  async ngOnInit() {
    await this.storage.create();
  }

  async login() {
    // Call the login method from AuthService
    const loginSuccessful = this.authService.login(
      this.formLogin.usuario,
      this.formLogin.password
    );

    if (loginSuccessful) {
      // Save user information to Ionic Storage
      await this.storage.set('userData', this.formLogin);

      // Navigate to another page with queryParams
      let datosEnviar: NavigationExtras = {
        queryParams: {
          nameUsuario: this.formLogin.usuario,
        },
      };
      this.router.navigate(['/home'], datosEnviar);
    } else {
      // Handle unsuccessful login, e.g., show an alert
      this.isAlertOpen = true;
    }
  }
}
