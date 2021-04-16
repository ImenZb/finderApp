import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabSearchPageComponent } from './tab-search-page.component';

describe('TabSearchPageComponent', () => {
  let component: TabSearchPageComponent;
  let fixture: ComponentFixture<TabSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabSearchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
