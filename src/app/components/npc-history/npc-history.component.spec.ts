import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcHistoryComponent } from './npc-history.component';

describe('NpcHistoryComponent', () => {
  let component: NpcHistoryComponent;
  let fixture: ComponentFixture<NpcHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NpcHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
