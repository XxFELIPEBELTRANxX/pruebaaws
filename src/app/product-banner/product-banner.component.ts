import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-banner',
  templateUrl: './product-banner.component.html',
  styleUrl: './product-banner.component.css'
})
export class ProductBannerComponent {

  @Input() title: string = ''; 
  @Input() paragraph: string = ''; 
}
