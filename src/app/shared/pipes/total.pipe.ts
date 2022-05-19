import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(coef: number, val: number, tva?: number): unknown {
    if (tva) return val * coef * (tva / 100 + 1);
    return val * coef;
  }
}
