import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterType: string, keyword: string): any {
    if (!filterType || !keyword) {
      return list;
    }

    return list.filter( item => {
      const filterValue = item[filterType];
      return filterValue.indexOf(keyword) >= 0;
    });
  }

}
