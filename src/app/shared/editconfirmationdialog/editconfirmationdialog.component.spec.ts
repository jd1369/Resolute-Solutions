import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconfirmationdialogComponent } from './editconfirmationdialog.component';

describe('EditconfirmationdialogComponent', () => {
  let component: EditconfirmationdialogComponent;
  let fixture: ComponentFixture<EditconfirmationdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditconfirmationdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditconfirmationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
