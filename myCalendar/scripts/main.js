var isImportant = false;
var isAsideVisble = true;

function toggleImportant(){
    let icon = $(".iImportant");
    if(isImportant){
        icon.removeClass("fas").addClass("far");
        isImportant = false;
    }else{
        icon.removeClass("far").addClass("fas");
        isImportant = true;
    }
    
}

function saveTask(){
    let title = $("#txtTitle").val();
    let dueDate = $("#txtDueDate").val();
    let location = $("#txtLocation").val();
    let description = $("#txtDescription").val();
    let participants = $("#txtParticipants").val();
    let color = $("#txtColor").val();
    
    let theTask = new Task(isImportant, title, dueDate, description, location, participants, color);
    console.log(theTask);

    displayTask(theTask);

    clearForm();
}

function displayTask(task){
    let syntax = `<div class="task">

            <div class="task-title">
                <h5>${task.title}</h5>
                <p>${task.description}</p>
            </div>


            <div class="task-location">
                <label> <i class="fas fa-map-marker-alt"></i> ${task.location}</label>
                <label> <i class="fas fa-clock"></i> ${task.dueDate}</label>
            </div>

        </div>`;

    $(".task-container").append(syntax);
}

function clearForm(){
    $("#txtTitle").val("");
    $("#txtDueDate").val("");
    $("#txtLocation").val("");
    $("#txtDescription").val("");
    $("#txtParticipants").val("");
    $("#txtColor").val("");
}


function toggleDetails() {
    let aside = $("aside");
    if(isAsideVisble){
        aside.hide();
        isAsideVisble = false;
    }else{
        aside.show();
        isAsideVisble = true;
    }
    
}

function init(){
    $("#btnSave").click(saveTask);

    $(".iImportant").click(toggleImportant);

    $("#btnToggleDetails").click(toggleDetails);
}


window.onload = init;

