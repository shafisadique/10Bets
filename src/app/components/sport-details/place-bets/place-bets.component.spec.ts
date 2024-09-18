import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceBetsComponent } from './place-bets.component';

describe('PlaceBetsComponent', () => {
  let component: PlaceBetsComponent;
  let fixture: ComponentFixture<PlaceBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceBetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlaceBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
