import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidshowParesComponent } from './slidshow-pares.component';

describe('SlidshowParesComponent', () => {
  let component: SlidshowParesComponent;
  let fixture: ComponentFixture<SlidshowParesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidshowParesComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidshowParesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
