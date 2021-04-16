import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IAdditive } from 'src/app/additive';
import { AdditifService } from 'src/app/services/additif.service';
import { WikiService } from 'src/app/services/wiki.service';

@Component({
  selector: 'app-iem-page',
  templateUrl: './iem-page.component.html',
  styleUrls: ['./iem-page.component.css']
})
export class IemPageComponent implements OnInit {
  item$: Observable<IAdditive>;
  info$: Observable<any>;
  id:string;
  constructor(private serviceAdd: AdditifService,private serviceWiki: WikiService, private routeA: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.routeA.snapshot.params['id'];
    this.item$ = this.serviceAdd.getById(this.id);
    this.info$ = this.serviceWiki.getWikiDescription(this.id);
  }

  levelToColor(level:string):string{
    switch (level) {
      case '0':
        return 'success';
        break;
      case '1':
        return 'secondary';
        break;
      case '2':
        return 'warning';
        break;
      case '3':
        return 'danger';
        break;
    
      default:
        break;
    }
  }

}
