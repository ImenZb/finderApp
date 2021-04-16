import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IemPageComponent } from './iem-page.component';

describe('IemPageComponent', () => {
  let component: IemPageComponent;
  let fixture: ComponentFixture<IemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IemPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
