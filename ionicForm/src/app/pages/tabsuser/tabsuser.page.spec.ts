import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsuserPage } from './tabsuser.page';

describe('TabsuserPage', () => {
  let component: TabsuserPage;
  let fixture: ComponentFixture<TabsuserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsuserPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsuserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
