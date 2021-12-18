import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataareaComponent } from './dataarea.component';

describe('DataareaComponent', () => {
  let component: DataareaComponent;
  let fixture: ComponentFixture<DataareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
