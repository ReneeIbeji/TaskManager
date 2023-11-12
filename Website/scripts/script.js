class tasksList{
    

    constructor(){
        this.tasks = [];
        this.taskNumber = 0;
    }

    addTask(name, description){
        this.tasks[this.taskNumber] = new task(name,description);
        this.taskNumber++;
        
        return this.taskNumber;
    }

    removeTask(index){

        // push all current tasks back in the array so they are all next to each other
        for(let i = index + 1; i < taskNumber; i++){
            this.tasks[i - 1] = this.tasks[i];
       }

       this.taskNumber--;
       
        return;
    }

    get TaskNum(){
        return this.taskNumber;
    }

    getTaskFromIndex(index){
        return this.tasks[index];
    }

}

class task{

    constructor(taskName,taskDescription){
        this.taskName = taskName;
        this.taskDescription = taskDescription;
    }

    get TaskName(){
        return this.taskName;
    }

    set TaskName(name){
        this.taskName = name;
        
    }

    get TaskDescription(){
        return this.taskDescription;
    }

    set TaskDescription(description){
        this.taskDescription = description;
        
    }
}

function displayTasks(tasks){
    var tasksListElement = document.getElementById('itemList');
    
    for(let i = 0; i < tasks.TaskNum; i++){
        tasksListElement.innerHTML += `     
            <div class="item">
                <h3> ${tasks.getTaskFromIndex(i).TaskName}</h3>
                <p>${tasks.getTaskFromIndex(i).TaskDescription}</p>
            </div>
        `

    }
}


window.onload = function(){

    let tasks = new tasksList();

    tasks.addTask("Plant a tree","Get a sapling and plant a tree");

    console.log(tasks.getTaskFromIndex(0).TaskName);

    displayTasks(tasks);
}