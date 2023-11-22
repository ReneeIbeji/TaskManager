export class task {

    constructor(taskName, taskDescription) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
        this.done = false;
    }

    get TaskName() {
        return this.taskName;
    }

    set TaskName(name) {
        this.taskName = name;

    }

    get TaskDescription() {
        return this.taskDescription;
    }

    set TaskDescription(description) {
        this.taskDescription = description;

    }

    get Done(){
        return this.done;
    }

    set Done(done){
        this.done = done;
    }
}
