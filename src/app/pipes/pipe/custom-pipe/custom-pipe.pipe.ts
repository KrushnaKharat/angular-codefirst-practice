import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string, limit: number):any {
if(value == null) return;

return value.length ? value.substring(0,limit)+"..."+value;
  }

}
