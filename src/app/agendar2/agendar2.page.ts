import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendar2',
  templateUrl: './agendar2.page.html',
  styleUrls: ['./agendar2.page.scss'],
})
export class Agendar2Page implements OnInit {



  ngOnInit() {
  }
  selectedShape: string='';
  selectedCommand: string='';
  selectedTime: string='';

  constructor() {}

  submitForm() {
    console.log('Figura:', this.selectedShape);
    console.log('Comando:', this.selectedCommand);
    console.log('Hora:', this.selectedTime);
  }
  
}
