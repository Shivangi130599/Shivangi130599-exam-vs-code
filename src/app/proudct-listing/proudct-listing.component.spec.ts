 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProudctListingComponent } from './proudct-listing.component';

describe('ProudctListingComponent', () => {
  let component: ProudctListingComponent;
   let fixture: ComponentFixture<ProudctListingComponent>;

   beforeEach(async () => {
     await TestBed.configureTestingModule({
       declarations: [ ProudctListingComponent ]
     })
     .compileComponents();
   });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProudctListingComponent);
     component = fixture.componentInstance;
    fixture.detectChanges();
   });

  it('should create', () => {
    expect(component).toBeTruthy();
   });
 });
