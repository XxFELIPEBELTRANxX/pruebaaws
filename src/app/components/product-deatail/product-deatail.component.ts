import { Component } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { map, tap } from 'rxjs';
import { ProductsServices } from '../../services/products.services';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-product-deatail',
  templateUrl: './product-deatail.component.html',
  styleUrl: './product-deatail.component.css'
})
export class ProductDeatailComponent {

  constructor(private activeRoute: ActivatedRoute, private productsServices: ProductsServices, private authServices: AuthService){}

  productId!: string;
  product!: any;
  user: any;
  
  ngOnInit(){
    this.activeRoute.params
    .pipe(
      tap( Response => {
        console.log( Response)
        return Response
      }),
      map( Response => Response[ 'id' ])
    
    ).subscribe( id => {
      console.log(id);

      this.productId = id;
      
      this.productsServices.getproductById( this.productId ).subscribe( ( data )=> {
        console.log( data )
        this.product = data.data
      })
      
    })
    this.authServices.user$.subscribe( user =>{
      this.user = user
    })
  }

  showBuyButtom(){
    return this.user && this.user.role && this.user.role.some((role:any) => role.name === 'User');
  }
}
