import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeleteconfirmationdialogComponent } from '../shared/deleteconfirmationdialog/deleteconfirmationdialog.component';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent implements OnInit {
  displayedColumns: string[] = ['name', 'email', 'actions'];
  dataSource!: MatTableDataSource<any>;
  productForm!: FormGroup;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  selectedProduct: any | null = null;

  constructor(
    private shared: SharedService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
    this.productsList();
  }

  productsList() {
    this.shared.getProduct().subscribe({
      next: (response: any) => {
        if (response) {
          this.dataSource = new MatTableDataSource(response);
          this.dataSource.paginator = this.paginator;
        }
      },
      error: (err: any) => {
        console.error("run 'npx json-server --watch list.json' for making the json server online to run operations ", err);
        alert("run 'npx json-server --watch list.json' for making the json server online to run operation'")
      },
    });
  }

  editProduct(item: any): void {
    this.selectedProduct = item;
    
    this.productForm.patchValue({
      name: this.selectedProduct.name,
      email: this.selectedProduct.email
    });
  }
  
  updateProduct(item: any): void {
    if (!this.productForm.valid) {
      console.log("Form data is invalid");
      return;
    }

    this.shared.editProduct(this.selectedProduct, this.productForm.value).subscribe(response => {
      console.log("Updated Successfully", response);
      this.productsList();
      this.selectedProduct = null;
    }, error => {
      console.error("Update Failed", error);
    });
  }

  deleteProduct(id: string): void {
    const dialogRef = this.dialog.open(DeleteconfirmationdialogComponent, {
      width: '250px',
      data: { id }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       
        this.shared.deleteProduct(id).subscribe(response => {
          console.log('Product deleted successfully', response);
          this.productsList();
        }, error => {
          console.error("Deletion Failed", error);
        });
      }
    });
  }
}
