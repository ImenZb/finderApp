import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title:string ='';
  constructor(public modalController: ModalController) { }

  ngOnInit(): void {
  }

  async presentModal(){
    const modal = await this.modalController.create({
      component: ModalComponent
    });
    console.log('modal');
    modal.present();
  }
}
