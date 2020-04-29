import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoDataComponent } from './no-data.component';

describe('NoDataComponent', () => {
  let component: NoDataComponent;
  let fixture: ComponentFixture<NoDataComponent>;

  beforeEach(async(() => {
    const a = setup().default();
    TestBed.configureTestingModule({
      declarations: [ NoDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('when ngOnInit is called it should', () => {
        const { build } = setup().default();
        const c = build();
        c.ngOnInit();
    });
});

function setup() {
    const builder = {
        default() {
            return builder;
        },
        build() {
            return new NoDataComponent();
        }
    }
    return builder;
}