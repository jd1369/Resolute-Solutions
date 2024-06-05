import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteconfirmationdialogComponent } from './deleteconfirmationdialog.component';

describe('DeleteconfirmationdialogComponent', () => {
  let component: DeleteconfirmationdialogComponent;
  let fixture: ComponentFixture<DeleteconfirmationdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteconfirmationdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteconfirmationdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
