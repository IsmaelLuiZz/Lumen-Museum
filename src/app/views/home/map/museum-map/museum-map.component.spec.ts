import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumMapComponent } from './museum-map.component';

describe('MuseumMapComponent', () => {
  let component: MuseumMapComponent;
  let fixture: ComponentFixture<MuseumMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseumMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseumMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
