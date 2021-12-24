import { FunctionExpr } from '@angular/compiler';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ait-unit-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ait-unit-test');
  });

});

describe('Function Test', () => {
  let funct: AppComponent;
  beforeEach(() => {
    funct = new AppComponent();
  });
  it('should add to do', () => {
    let value = 'test task';
    funct.value = value;
    funct.onChangeValue();
    expect(funct.task.task).toEqual(value);
  });
  it('should add task', () => {
    let task = 'testing task';
    funct.task.task = task;
    funct.addToDo();
    let index = funct.listIncompleteTask.findIndex(x => x.task == task);
    expect(index).toBeGreaterThanOrEqual(0);
  });
  it('should completed task', () => {
    let id = 2;
    let task = { id: id, task: 'Create Model', complete: false };
    funct.listIncompleteTask.push(task);
    funct.onCompleteTask(id);
    let index = funct.listIncompleteTask.findIndex(x => x.id == id);
    let indexComplete = funct.listCompleteTask.findIndex(x => x.id == id);
    expect(index).toEqual(-1);
    expect(indexComplete).toEqual(0);
  });
  it('should uncompleted task', () => {
    let id = 2;
    let task = { id: id, task: 'Create Model', complete: true };
    funct.listCompleteTask.push(task);
    funct.onRemoveCompleteTask(id);
    let indexA = funct.listCompleteTask.findIndex(x => x.id == id);
    let indexB = funct.listIncompleteTask.findIndex(x => x.id == id);
    expect(indexA).toEqual(-1);
    expect(indexB).toEqual(0);
  });
});
