import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressmodalComponent } from './progressmodal.component';

describe('ProgressmodalComponent', () => {
  let component: ProgressmodalComponent;
  let fixture: ComponentFixture<ProgressmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
