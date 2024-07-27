import { Component } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { Product } from '../../interfaces/product';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-card-filter',
  templateUrl: './card-filter.component.html',
  styleUrl: './card-filter.component.css'
})
export class CardFilterComponent {
  products!: any ;
  user: any;
  
  constructor( private productServices: ProductsServices, private authService: AuthService){}

  
  
  ngOnInit() {
    this.productServices.getProducts().subscribe((data) => {

      const lookForCategory = ['Electrodomésticos', 'non-category']

      let firstProducts: { [key: string]: Product } = {};

      

      for(const categoria of lookForCategory){
          const product = data.data.find( (p: Product) => p.category === categoria)
          
          if(product){
            firstProducts[categoria] = product;
          }
      }

      this.products = Object.values (firstProducts);
  })

    this.authService.user$.subscribe( user => {
      this.user = user;
    })
  }
    showBuyButton(){
      return this.user && this.user.role && this.user.role.some((role:any) => role.name === 'User');
    }

  
}
