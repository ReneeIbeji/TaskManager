export class task {

    constructor(taskName, taskDescription) {
        this.taskName = taskName;
        this.taskDescription = taskDescription;
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
}
