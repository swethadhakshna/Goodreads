import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookShelvesComponent } from './book-shelves.component';

describe('BookShelvesComponent', () => {
  let component: BookShelvesComponent;
  let fixture: ComponentFixture<BookShelvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookShelvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookShelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
