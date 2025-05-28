import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtShowcasesComponent } from './art-showcases.component';

describe('ArtShowcasesComponent', () => {
  let component: ArtShowcasesComponent;
  let fixture: ComponentFixture<ArtShowcasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtShowcasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtShowcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
