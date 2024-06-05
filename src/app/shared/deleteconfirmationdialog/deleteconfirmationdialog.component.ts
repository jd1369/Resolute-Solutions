import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-deleteconfirmationdialog',
  templateUrl: './deleteconfirmationdialog.component.html',
  styleUrls: ['./deleteconfirmationdialog.component.scss']
})
export class DeleteconfirmationdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteconfirmationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
  

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close(false); 
  }

  onYesClick(): void {
    this.dialogRef.close(true); 
  }

}
