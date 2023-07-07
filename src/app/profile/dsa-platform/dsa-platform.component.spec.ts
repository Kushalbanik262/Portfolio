import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsaPlatformComponent } from './dsa-platform.component';

describe('DsaPlatformComponent', () => {
  let component: DsaPlatformComponent;
  let fixture: ComponentFixture<DsaPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsaPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DsaPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
