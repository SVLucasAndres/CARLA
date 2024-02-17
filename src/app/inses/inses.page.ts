import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'; 
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; 

@Component({
  selector: 'app-inses',
  templateUrl: './inses.page.html',
  styleUrls: ['./inses.page.scss'],
})
export class InsesPage implements OnInit {
 
  constructor(private http: HttpClient, private toastController: ToastController,private router: Router, private storage:Storage) { }

  formData ={
    user:"",
    pass:""
  }


  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Usuario o contraseña incorrectos, o el usuario no existe',
      duration: 3000,
      position: position,
    });

    await toast.present();
  }
   async ngOnInit() {
    await this.storage.create();
  }

  botonHabilitado: boolean = false;

  actualizarEstadoBoton() {
    this.botonHabilitado = this.formData.user !== '' && this.formData.pass !== '';
  }

  obtenerRegistro(){
    console.log(this.formData);
    axios.post("http://localhost/login.php", this.formData)
    .then(
      (response)=>{
      console.log(response);
      if(response.data > 0){
        this.storage.set("ID", JSON.stringify(response.data));
        this.router.navigate(['/intro']);
      }else{
        this.presentToast('bottom');
      }
      })
    .catch((error)=>{
      console.log(error);
    })
  }
  

}
