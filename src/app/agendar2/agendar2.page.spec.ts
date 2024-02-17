import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Agendar2Page } from './agendar2.page';

describe('Agendar2Page', () => {
  let component: Agendar2Page;
  let fixture: ComponentFixture<Agendar2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Agendar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
