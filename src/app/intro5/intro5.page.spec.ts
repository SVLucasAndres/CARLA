import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Intro5Page } from './intro5.page';

describe('Intro5Page', () => {
  let component: Intro5Page;
  let fixture: ComponentFixture<Intro5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Intro5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
