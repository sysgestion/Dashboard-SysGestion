import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monedaChilena'
})
export class MonedaChilenaPipe implements PipeTransform {

  transform(value: number): string {
    let salida:string;

    salida = ("$ "+ value).replace(/(\d+)(\d{3})(\d{3})$/ ,"$1.$2.$3").replace(/(\d+)(\d{3})$/ ,"$1.$2");

    return salida;
  }

}
