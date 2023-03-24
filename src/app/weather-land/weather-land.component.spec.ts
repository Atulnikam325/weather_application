import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLandComponent } from './weather-land.component';

describe('WeatherLandComponent', () => {
  let component: WeatherLandComponent;
  let fixture: ComponentFixture<WeatherLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherLandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
