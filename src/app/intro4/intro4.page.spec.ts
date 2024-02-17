import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Intro4Page } from './intro4.page';

describe('Intro4Page', () => {
  let component: Intro4Page;
  let fixture: ComponentFixture<Intro4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Intro4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
