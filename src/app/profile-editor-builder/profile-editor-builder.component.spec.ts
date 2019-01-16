import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditorBuilderComponent } from './profile-editor-builder.component';

describe('ProfileEditorBuilderComponent', () => {
  let component: ProfileEditorBuilderComponent;
  let fixture: ComponentFixture<ProfileEditorBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditorBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditorBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
