import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios'; 
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular'; 

@Component({
  selector: 'app-prin',
  templateUrl: './prin.page.html',
  styleUrls: ['./prin.page.scss'],
})
export class PrinPage implements OnInit {
  usuarioID:string="";

  constructor(private http: HttpClient, private toastController: ToastController,private router: Router, private storage:Storage) {
    this.userID();
  }

  async userID(){
    await this.simularPeticionHttp();
    this.usuarioID = await this.storage.get("ID");

    // Ahora que this.usuarioID se ha establecido correctamente, podemos enviar la solicitud HTTP
    this.enviarSolicitudHTTP();
  }

  async simularPeticionHttp() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Petición HTTP simulada completada");
  }

  enviarSolicitudHTTP() {
    // Creamos el objeto de datos después de que this.usuarioID se ha establecido correctamente
    const formData = {
      id: this.usuarioID
    };

    // Enviamos la solicitud HTTP
    axios.post("http://localhost/obteneruser.php", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  ngOnInit() {
  }  
}
