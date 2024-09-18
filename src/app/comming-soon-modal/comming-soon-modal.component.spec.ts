import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommingSoonModalComponent } from './comming-soon-modal.component';

describe('CommingSoonModalComponent', () => {
  let component: CommingSoonModalComponent;
  let fixture: ComponentFixture<CommingSoonModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommingSoonModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommingSoonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
