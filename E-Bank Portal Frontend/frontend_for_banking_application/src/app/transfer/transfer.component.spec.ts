import { ComponentFixture, TestBed } from '@angular/core/testing';

import { transferComponent } from './transfer.component';

describe('transferComponent', () => {
  let component: transferComponent;
  let fixture: ComponentFixture<transferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [transferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(transferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
