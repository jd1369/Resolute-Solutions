import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-editconfirmationdialog',
  templateUrl: './editconfirmationdialog.component.html',
  styleUrls: ['./editconfirmationdialog.component.scss']
})
export class EditconfirmationdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditconfirmationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { updatedItem: any } 
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close(false); 
  }

  onYesClick(): void {
    this.dialogRef.close(true); 
  }

}
