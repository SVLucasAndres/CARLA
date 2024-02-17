import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import axios from 'axios';
@Component({
  selector: 'app-re',
  templateUrl: './re.page.html',
  styleUrls: ['./re.page.scss'],
})
export class RePage implements OnInit {

  constructor(private http: HttpClient, private toastController: ToastController,private router: Router) { }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Este usuario ya existe. Por favor, elige otro',
      duration: 3000,
      position: position,
    });

    await toast.present();
  }
  
  formData ={
    user:"",
    pass:"",
    age:"",
    kidname:""
  }

  ngOnInit() {
  }

  botonHabilitado: boolean = false;

  actualizarEstadoBoton() {
    this.botonHabilitado = this.formData.user !== '' && this.formData.pass !== '' && this.formData.age !== '' && this.formData.kidname !== '';
  }
  
  obtenerRegistro(){
    console.log(this.formData);
    axios.post("http://localhost/registro.php", this.formData)
    .then(
      (response)=>{
      console.log(response);
      if(response.data == "UserExistant"){
        this.presentToast('bottom');
      }else{
        this.router.navigate(['/inses']);
      }
      })
    .catch((error)=>{
      console.log(error);
    })
  }
  alertButtons = ['OK'];

}
