import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CardformComponent } from './cardform.component';

describe('CardformComponent', () => {
  let component: CardformComponent;
  let fixture: ComponentFixture<CardformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardformComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CardformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
