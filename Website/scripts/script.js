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

    setTaskTitleFromIndex(index, title){
        this.tasks[index].TaskName = title;
    }
    

    setTaskDescriptionFromIndex(index, description){
        this.tasks[index].TaskDescription = description;
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


let newTaskButton;
let tasksListElement;
let tasks = new tasksList();


window.onload = function(){

    tasks = new tasksList();

    tasksListElement = document.getElementById('itemList');

    newTaskButton = document.getElementById("createTaskButton")

    tasks.addTask("Plant a tree","Get a sapling and plant a tree");

    console.log(tasks.getTaskFromIndex(0).TaskName);

    displayTasks(tasks);
    newTaskButton = document.getElementById("createTaskButton");

    
    newTaskButton.addEventListener("click", function() {
        tasks.addTask("Test","Description");
        displayTasks(tasks);
    }); 
}


function displayTasks(tasks){
    
    tasksListElement.innerHTML = "";

    for(let i = tasks.TaskNum -1 ; i > -1; i--){
        tasksListElement.innerHTML += `     
            <div class="item" id="${i}">
                <div class = "title"  id="${i}">
                    <h3>${tasks.getTaskFromIndex(i).TaskName}</h3>
                </div>
                
                <div class = "description" id="${i}">
                    <p>${tasks.getTaskFromIndex(i).TaskDescription}</p>
                </div>
            </div>
        `;
        
        
        document.getElementsByClassName("title")[-1 * (i - tasks.TaskNum + 1)].addEventListener("click", function(evt){
            evt.target.innerHTML = "Hello";
        });
        
    }


    let allTitles = document.getElementsByClassName("title");

    for(var title of allTitles){
        title.addEventListener("click", function(evt){
            evt.target.innerHTML =   `<input type="text" id="fname" name="fname">`;
            evt.target.addEventListener("keypress", function(event){
                if (event.key === "Enter" && evt.target.parentElement.id != ""){
                    console.log(evt.target.parentElement.id);
                    evt.target.innerHTML = `<h3>${event.target.value}</h3>`;
                    tasks.setTaskTitleFromIndex(parseInt(evt.target.parentElement.id),event.target.value); 
                }
            })
        });
    }
    
    let allDescriptions = document.getElementsByClassName("description");

    for(var description of allDescriptions){
        description.addEventListener("click", function(evt){
            evt.target.innerHTML =   `<input type="text" id="fname" name="fname">`;
            evt.target.addEventListener("keyup", function(event){
                if (event.key === "Enter" && evt.target.parentElement.id != "" ){
                    console.log(evt.target.parentElement.id);
                    evt.target.innerHTML =`<p>${event.target.value}</p>` ;
                    tasks.setTaskDescriptionFromIndex(parseInt(evt.target.parentElement.id), event.target.value);
                } 
            })
        });
    }
   return;
}