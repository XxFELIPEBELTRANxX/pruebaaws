import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouponsService } from '../../services/coupons.service';


@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.css'
})


export class CouponComponent {
  categories: any;
  couponFormulario!: FormGroup;
  titulo = 'Create coupon';


  constructor(private coupons: CouponsService) {
    this.couponFormulario = new FormGroup({
      code: new FormControl("", [Validators.required]),
      discount: new FormControl("", [Validators.required, Validators.min(0)]),
      validFrom: new FormControl("", [Validators.required]),
      validUntil: new FormControl("", [Validators.required]),
    });
  }


  couponForm() {
    if (this.couponFormulario.valid) {
      console.log('Datos del formulario', this.couponFormulario.value);
      this.coupons.getCoupon(this.couponFormulario.value).subscribe(data => { 
        console.log(data);
      });
      this.couponFormulario.reset();
        }
      
  }


  // ngOnInit() {}
 
 
 
}
