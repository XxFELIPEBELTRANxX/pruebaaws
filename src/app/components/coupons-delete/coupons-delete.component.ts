import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CouponsService } from '../../services/coupons.service';

@Component({
  selector: 'app-coupons-delete',
  templateUrl: './coupons-delete.component.html',
  styleUrls: ['./coupons-delete.component.css']
})
export class CouponsDeleteComponent {
  couponFormulario!: FormGroup;
  titulo = 'Delete coupon';

  constructor(private coupons: CouponsService) {
    this.couponFormulario = new FormGroup({
      code: new FormControl("", [Validators.required]),
    });
  }

  deleteCoupon() {
    if (this.couponFormulario.valid) {
      console.log('Código a eliminar', this.couponFormulario.value.code);
      this.coupons.deleteCoupon(this.couponFormulario.value.code).subscribe(data => {
        console.log('Cupón eliminado:', data);
      });
      this.couponFormulario.reset();
    }
  }
}
