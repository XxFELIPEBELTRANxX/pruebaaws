import { Component } from '@angular/core';
import { ProductsServices } from '../../services/products.services';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})


export class CardComponent {
  products!: any ;
  user:any;
    constructor( private productServices: ProductsServices, private authService: AuthService){}

    ngOnInit(){
        this.productServices.getProducts().subscribe( (data) => {
          console.log(data.data)

          this.products = data.data
        })

        this.authService.user$.subscribe( user =>{
          this.user = user;
        })
    }

    showBuyButton(){
      return this.user && this.user.role && this.user.role.some((role:any) => role.name === 'User');
    }

}
