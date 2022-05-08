import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurAgendasComponent } from './our-agendas.component';

describe('OurAgendasComponent', () => {
  let component: OurAgendasComponent;
  let fixture: ComponentFixture<OurAgendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurAgendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurAgendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
