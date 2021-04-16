import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(value: string): string {
    let res='';
    switch (true) {
      case value === '0':
        res = 'success';
        break;
      case value === '1':
        res = 'tertiary';
        break;
      case value === '2':
        res ='warning';
        break;
      case value === '3':
        res ='danger';
        break;
      default:
        res ='danger';
        break;
    }
    return res;
  }

}
