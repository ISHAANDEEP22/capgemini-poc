import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'capgemini-poc';
  productForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.productForm = this.fb.group({
      name: '',
      quantities: this.fb.array([]),
    });
  }

  quantities(): FormArray {
    return this.productForm.get("quantities") as FormArray
  }

  newQuantity(): FormGroup {
    return this.fb.group({
      qty: '',
    })
  }

  addQuantity() {
    this.quantities().push(this.newQuantity());
  }

  removeQuantity(i: number) {
    this.quantities().removeAt(i);
  }
}
