import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IAdditive } from 'src/app/additive';
import { AdditifService } from 'src/app/services/additif.service';

@Component({
  selector: 'app-tab-search-page',
  templateUrl: './tab-search-page.component.html',
  styleUrls: ['./tab-search-page.component.css']
})
export class TabSearchPageComponent implements OnInit {
  items$ : Observable<IAdditive[]>;
  id: string;
  constructor(private serviceAdd: AdditifService, private router: Router) { }

  ngOnInit(): void {
    this.items$ = this.serviceAdd.getAll();
  }

  getAdditif(input: string){
    this.items$.subscribe(additives => this.displaySearchResult(additives,input)); 
  }

  displaySearchResult(additives:IAdditive[],input){
    this.id =  additives.find(element => element.id.includes(input))?.id;
    if(this.id){
      this.router.navigate([`tabs/tab-list-page/item/${this.id}`]);
    } 
  }
}
