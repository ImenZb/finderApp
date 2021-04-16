import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AdditifService } from 'src/app/services/additif.service';
import { IAdditive } from '../../additive'

@Component({
  selector: 'app-tab-list-page',
  templateUrl: './tab-list-page.component.html',
  styleUrls: ['./tab-list-page.component.css']
})
export class TabListPageComponent implements OnInit {
  list$: Observable<IAdditive[]>;
  filteredList: Observable<IAdditive[]>;
  min = 0;
  max = 10;
  filtered = false;

  constructor(private router: Router, private serviceAdditive : AdditifService) { }
 
  ngOnInit(): void {
    this.list$ = this.serviceAdditive.getAll();
  }

  displayDetails(item: IAdditive){
    //redirect to item details
    this.router.navigate([`tabs/tab-list-page/item/${item.id}`]);
  }

  loadData($event){
    this.max = this.max + 10;
    $event.target.complete();
  }

  segmentChanged($event){
    const levelForFilter = this.converToLevel($event.detail.value);
    if(levelForFilter){
      this.filtered = true;
      this.filteredList = this.serviceAdditive.getByLevel(levelForFilter);
    }else{
      this.filtered = false;
    }
  }

  converToLevel(val:string):string{
    let result :string= '';
    switch (true) {
      case val == 'danger':
        result = '3';
        break;
      case val == 'warning':
        result = '2';
        break;
      case val == 'tertiary':
         result = '1';
         break;
      case val == 'success':
        result = '0';
        break; 
      default:
        result = null;
        break;
    }
    return result;
  }

}
