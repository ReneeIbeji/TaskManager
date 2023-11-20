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
        for(let i = index; i < this.taskNumber - 1; i++){
            this.tasks[i] = this.tasks[i + 1];
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
        tasks.addTask("Task name","Description");
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
                <div class ="close">
                    <h1>X</h1>
                </div>
            </div>
        `;
        
      
        
    }


    let allTitles = document.getElementsByClassName("title");

    for(var title of allTitles){
        title.addEventListener("click", function(evt){
            console.log(evt.target.tagname);
            if(evt.target.tagName === "H3"){
                var temp = document.createElement("input");
                var mainTag = evt.target.parentElement;

                temp.type = "text";
                temp.value = evt.target.innerHTML;

                evt.target.parentElement.appendChild(temp);

                console.log(evt.target.parentElement.children[0]);
                evt.target.parentElement.removeChild(evt.target.parentElement.children[0]); 

                mainTag.addEventListener("keypress", function(event){
                    if (event.key === "Enter" && event.target.parentElement != null){

                        console.log(event.target);
                        var temp = document.createElement("H3");
                        temp.innerHTML = removeTagsFromText(event.target.value);

                        event.target.parentElement.appendChild(temp);

                        tasks.setTaskTitleFromIndex(parseInt(event.target.parentElement.id),removeTagsFromText(event.target.value)); 

                        event.target.parentElement.removeChild(event.target.parentElement.children[0]);
                    }
                })
            }
        });
    }
    
    let allDescriptions = document.getElementsByClassName("description");

    for(var description of allDescriptions){
        description.addEventListener("click", function(evt){
            console.log(evt.target.tagname);
            if(evt.target.tagName === "P"){
                var temp = document.createElement("input");
                var mainTag = evt.target.parentElement;

                temp.type = "text";
                temp.value = evt.target.innerHTML;

                evt.target.parentElement.appendChild(temp);

                console.log(evt.target.parentElement.children[0]);
                evt.target.parentElement.removeChild(evt.target.parentElement.children[0]); 

                mainTag.addEventListener("keypress", function(event){
                    if (event.key === "Enter" && event.target.parentElement != null){

                        console.log(event.target);
                        var temp = document.createElement("P");
                        temp.innerHTML = removeTagsFromText(event.target.value);

                        event.target.parentElement.appendChild(temp);

                        tasks.setTaskDescriptionFromIndex(parseInt(event.target.parentElement.id),removeTagsFromText(event.target.value)); 

                        event.target.parentElement.removeChild(event.target.parentElement.children[0]);
                    }
                })
            }
        });
    }

    let allCloses = document.getElementsByClassName("close");

    for(var close of allCloses){
        close.addEventListener("click", function(evt){
            tasks.removeTask(evt.target.parentElement.id);
            displayTasks(tasks);
        });
    }
   return;
}

function removeTagsFromText(text){
    let tagStart = [];
    let tagOpenNum = 0;
    
    for(let i = 0; i < text.length; i++){
        if(text[i] === '<'){
            tagStart[tagOpenNum] =  i;
            tagOpenNum++;
        }
        else if(text[i] === '>' && tagOpenNum != 0){
            for(let z = tagStart[tagOpenNum - 1]; z <=  i; z++){
                text = replaceChar(text,' ',z);
            }
            tagOpenNum--;
        }

    
    
    }
    console.log(text);
    return text;
}

function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);

    let lastPart = origString.substr(index + 1);

    let newString =
        firstPart + replaceChar + lastPart;

    return newString;
}