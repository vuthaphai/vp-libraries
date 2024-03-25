import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpFaInputComponent } from './vp-fa-input.component';

describe('VpFaInputComponent', () => {
  let component: VpFaInputComponent;
  let fixture: ComponentFixture<VpFaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VpFaInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VpFaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
