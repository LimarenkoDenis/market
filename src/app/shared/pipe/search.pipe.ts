import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  public transform(products: Product[], queryString: string): Product[] {

    if (!queryString) {
      return products;
    }

    return products.filter((employee: Product) => {
      return  employee.name.toLowerCase().indexOf(queryString.toLowerCase()) !== -1 ||
              employee.description.toLowerCase().indexOf(queryString.toLowerCase()) !== -1;
    });
  }

}
