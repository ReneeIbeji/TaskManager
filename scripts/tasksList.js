import {task} from "./task.js";
export class tasksList {

    #tasks;
    #taskNumber;

    constructor() {
        this.tasks = [];
        this.taskNumber = 0;
    }

    addTask(name, description) {
        this.tasks[this.taskNumber] = new task(name, description);
        this.taskNumber++;

        return this.taskNumber;
    }

    removeTask(index) {

        // push all current tasks back in the array so they are all next to each other
        for (let i = index; i < this.taskNumber - 1; i++) {
            this.tasks[i] = this.tasks[i + 1];
        }


        this.taskNumber--;
        return;

    }

    get TaskNum() {
        return this.taskNumber;
    }

    getTaskFromIndex(index) {
        return this.tasks[index];
    }

    setTaskTitleFromIndex(index, title) {
        this.tasks[index].TaskName = title;
    }


    setTaskDescriptionFromIndex(index, description) {
        this.tasks[index].TaskDescription = description;
    }

    setTaskCompletionFromIndex(index, done){
        this.tasks[index].Done = done;
    }

}
