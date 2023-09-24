import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVillComponent } from './view-vill.component';

describe('ViewVillComponent', () => {
  let component: ViewVillComponent;
  let fixture: ComponentFixture<ViewVillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
