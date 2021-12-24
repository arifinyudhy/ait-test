export class TaskModel {
  id: number;
  task: string;
  complete: boolean;
  constructor(task: any) {
    this.id = task.id;
    this.task = task.task;
    this.complete = task.complete;
  }
}
