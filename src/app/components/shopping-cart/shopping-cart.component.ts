import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  shoppingCartForm: FormGroup;
  total: number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.shoppingCartForm = this.formBuilder.group({
      items: this.formBuilder.array([])
    });
  }

  get items(): FormArray {
    return this.shoppingCartForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    this.items.removeAt(index);
    this.calculateTotal();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      price: 0
    });
  }

  calculateTotal() {
    this.total = this.items.value.reduce((acc: number, curr: any) => acc + curr.price, 0);
  }

  onSubmit() {
    console.log('Items in the shopping cart:', this.items.value);
    console.log('Total:', this.total);
    // Aquí podrías enviar los datos a un servicio o realizar otra acción
  }
}
