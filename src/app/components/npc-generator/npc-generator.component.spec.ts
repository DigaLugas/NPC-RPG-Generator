import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcGeneratorComponent } from './npc-generator.component';

describe('NpcGeneratorComponent', () => {
  let component: NpcGeneratorComponent;
  let fixture: ComponentFixture<NpcGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NpcGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NpcGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
