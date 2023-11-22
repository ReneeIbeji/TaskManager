
import {task} from './task.js'
import {tasksList} from './tasksList.js';

let newTaskButton;
let tasksListElement;
let tasks = new tasksList();


window.onload = function(){

    tasks = new tasksList();
    tasksListElement = document.getElementById('itemList');

    newTaskButton = document.getElementById("createTaskButton")

    tasks.addTask("Plant a tree","Get a sapling and plant a tree");

    (tasks.getTaskFromIndex(0).TaskName);

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
                <div class ="done" id="${i}">
                    <input type="checkbox" name="checkbox" ${((tasks.getTaskFromIndex(i).Done) ? "checked" : "")}>
                </div>
                <div class ="close" id="${i}">
                    <h1>X</h1>
                </div>
            </div>
        `;
        
      
        
    }


    let allTitles = document.getElementsByClassName("title");

    // Set up task title value edit on click function
    for(var title of allTitles){
        title.addEventListener("click", function(evt){
            (evt.target.tagname);
            if(evt.target.tagName === "H3"){
                var temp = document.createElement("input");
                var mainTag = evt.target.parentElement;

                temp.type = "text";
                temp.value = evt.target.innerHTML;

                evt.target.parentElement.appendChild(temp);

                (evt.target.parentElement.children[0]);
                evt.target.parentElement.removeChild(evt.target.parentElement.children[0]); 

                mainTag.addEventListener("keypress", function(event){
                    if (event.key === "Enter" && event.target.parentElement != null){

                        (event.target);
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
    
    // Set up task description value edit on click function
    for(var description of allDescriptions){
        description.addEventListener("click", function(evt){
            (evt.target.tagname);
            if(evt.target.tagName === "P"){
                var temp = document.createElement("input");
                var mainTag = evt.target.parentElement;

                temp.type = "text";
                temp.value = evt.target.innerHTML;

                evt.target.parentElement.appendChild(temp);

                (evt.target.parentElement.children[0]);
                evt.target.parentElement.removeChild(evt.target.parentElement.children[0]); 

                mainTag.addEventListener("keypress", function(event){
                    if (event.key === "Enter" && event.target.parentElement != null){

                        (event.target);
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
            if(evt.target.parentElement.id != null){
                tasks.removeTask( parseInt(evt.target.parentElement.id));
                displayTasks(tasks);
            }
        });
    }

    let allCheckBoxes = document.getElementsByClassName("done");
    
    for(var checkBox of allCheckBoxes){
        checkBox.addEventListener("click", function(evt){
            tasks.setTaskCompletionFromIndex(parseInt(evt.target.parentElement.id), evt.target.checked);
        })
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
    (text);
    return text;
}

function replaceChar(origString, replaceChar, index) {
    let firstPart = origString.substr(0, index);

    let lastPart = origString.substr(index + 1);

    let newString =
        firstPart + replaceChar + lastPart;

    return newString;
}