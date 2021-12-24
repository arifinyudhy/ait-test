import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FunctionExpr } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatCardModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatListModule,
      ],
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ait-unit-test'`, () => {
    expect(app.title).toEqual('ait-unit-test');
  });
  it('should add to do', () => {
    let value = 'test task';
    app.value = value;
    app.onChangeValue();
    expect(app.task.task).toEqual(value);
  });
  it('should add task', () => {
    let task = 'testing task';
    app.task.task = task;
    app.addToDo();
    let index = app.listIncompleteTask.findIndex(x => x.task == task);
    expect(index).toBeGreaterThanOrEqual(0);
  });
  it('should completed task', () => {
    let id = 2;
    let task = { id: id, task: 'Create Model', complete: false };
    app.listIncompleteTask.push(task);
    app.onCompleteTask(id);
    let index = app.listIncompleteTask.findIndex(x => x.id == id);
    let indexComplete = app.listCompleteTask.findIndex(x => x.id == id);
    expect(index).toEqual(-1);
    expect(indexComplete).toEqual(0);
  });
  it('should uncompleted task', () => {
    let id = 2;
    let task = { id: id, task: 'Create Model', complete: true };
    app.listCompleteTask.push(task);
    app.onRemoveCompleteTask(id);
    let indexA = app.listCompleteTask.findIndex(x => x.id == id);
    let indexB = app.listIncompleteTask.findIndex(x => x.id == id);
    expect(indexA).toEqual(-1);
    expect(indexB).toEqual(0);
  });
});
