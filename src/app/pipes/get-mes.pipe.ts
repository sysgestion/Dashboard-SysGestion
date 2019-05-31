import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getMes'
})
export class GetMesPipe implements PipeTransform {

  transform(value: number): string {

    let salida:string;
    
    switch (value) {
      case 1: salida = 'Enero'; break;
      case 2: salida = 'Febrero'; break;
      case 3: salida = 'Marzo'; break;
      case 4: salida = 'Abril'; break;
      case 5: salida = 'Mayo'; break;
      case 6: salida = 'Junio'; break;
      case 7: salida = 'Julio'; break;
      case 8: salida = 'Agosto'; break;
      case 9: salida = 'Septiembre'; break;
      case 10: salida = 'Octubre'; break;
      case 11: salida = 'Noviembre'; break;
      case 12: salida = 'Diciembre'; break;
    }

    return salida;
  }

}
