import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorSkillsComponent } from './mentor-skills.component';

describe('MentorSkillsComponent', () => {
  let component: MentorSkillsComponent;
  let fixture: ComponentFixture<MentorSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
