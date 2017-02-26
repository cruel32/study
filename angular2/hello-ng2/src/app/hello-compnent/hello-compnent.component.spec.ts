/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelloCompnentComponent } from './hello-compnent.component';

describe('HelloCompnentComponent', () => {
  let component: HelloCompnentComponent;
  let fixture: ComponentFixture<HelloCompnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloCompnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
