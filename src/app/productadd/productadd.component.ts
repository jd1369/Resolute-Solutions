import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productadd',
  templateUrl: './productadd.component.html',
  styleUrls: ['./productadd.component.scss']
})
export class ProductaddComponent implements OnInit {
  productForm: FormGroup;

  constructor(private shared: SharedService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]]
    });
  }

  ngOnInit(): void {}

  addItem() {
    if (this.productForm.invalid) {
      return;
    }

    const newItem = this.productForm.value;
    this.shared.addProduct(newItem).subscribe(
      response => {
        alert('Added Successfully');
        this.resetForm();
      },
      error => {
        console.error('Error adding item:', error);
        alert('Data not added');
      }
    );
  }

  resetForm() {
    this.productForm.reset();
  }
}
