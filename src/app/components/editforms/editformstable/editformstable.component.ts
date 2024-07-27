import { Component } from '@angular/core';
import { ProductsServices } from '../../../services/products.services';

@Component({
  selector: 'app-editformstable',
  templateUrl: './editformstable.component.html',
  styleUrl: './editformstable.component.css'
})
export class EditformstableComponent {

  products: any;

  constructor(private productServices: ProductsServices){}


  ngOnInit(){
    return this.productServices.getProducts().subscribe((data)=>{
      console.log( data )

      this.products = data.data;
    })
  }
}
