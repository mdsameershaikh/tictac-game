import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredComponent } from './bored.component';

describe('BoredComponent', () => {
  let component: BoredComponent;
  let fixture: ComponentFixture<BoredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
