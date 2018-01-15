import { CheckOriginDirective } from './check-origin.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';

describe('CheckOriginDirective', () => {

  it('should create an instance', () => {
    const directive = new CheckOriginDirective();
    expect(directive).toBeTruthy();
  });
});
