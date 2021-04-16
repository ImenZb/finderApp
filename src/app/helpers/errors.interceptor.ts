import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdditifService } from '../services/additif.service';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {

  constructor(private serviceAdditif: AdditifService, private _alert: AlertController) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //chercher type d'erreur de request
    return next.handle(request).pipe(
      catchError(async err =>{
        if (err.error instanceof ErrorEvent) {
          
        }
        const ionAlert = await this._alert.create({
          header: 'Erreur',
          message: err?.statusText || 'Une erreur est survenue...',
          buttons: [
            {text: 'X'}
          ]
        });
        if([401, 403].includes(err.status)){
          await ionAlert.present();
          //const data = await ionAlert.onDidDismiss();
        }
        
        throw err;
      })
    );
  }
}
