import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberPipe'
})
export class NumberPipePipe implements PipeTransform {

  transform(value: any): any {
    return value + 1 >= 10 ? value + 1 : ('0' + (value + 1));
  }

}
