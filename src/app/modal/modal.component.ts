import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(public modalController: ModalController) { }

  ngOnInit(): void {
  }



  closeModal(){
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
