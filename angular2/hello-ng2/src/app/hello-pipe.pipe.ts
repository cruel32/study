import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'helloPipe'
})
export class HelloPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
