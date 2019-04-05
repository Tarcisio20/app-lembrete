import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  email = '';
  password= '';

  constructor(
    private router: Router, 
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ){}

  async login(){
    if (this.email == 'tarcisior19@hotmail.com') {
      if (this.password == '12345') {
        let loading = await this.loadingCtrl.create({
          message: 'Aguarde por favor ...' 
        });
        await loading.present();

        setTimeout(()=>{
          loading.dismiss();
        }, 3000);

        this.router.navigate(['/primary-page']);
      }else{
        const toast = await this.toastCtrl.create({
          message: 'Senha inválida',
          position: 'top',
          duration: 2000
        });
        await toast.present();

      }
    }else{

      const toast = await this.toastCtrl.create({
        message: 'E-mail inválido',
        position: 'top',
        duration: 2000
      });

      await toast.present();

    }
  }
}
