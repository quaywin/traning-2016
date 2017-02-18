var schedule = [
    {
        "id": "session-1",
        "title": "Registration",
        "tracks": [1, 2]
    },
    {
        "id": "session-2",
        "title": "Moving the Web forward with HTML5",
        "tracks": [1, 2]
    },
    {
        "id": "session-3",
        "title": "Diving in at the deep end with Canvas",
        "tracks": [1]
    },
    {
        "id": "session-4",
        "title": "New Technologies in Enterprise",
        "tracks": [2]
    },
    {
        "id": "session-5",
        "title": "WebSockets and You",
        "tracks": [1]
    },
    {
        "id": "session-6",
        "title": "Coffee and Cake Break",
        "tracks": [1, 2]
    },
    {
        "id": "session-7",
        "title": "Building Responsive UIs",
        "tracks": [1]
    },
    {
        "id": "session-8",
        "title": "Fun with Forms (no, really!)",
        "tracks": [2]
    },
    {
        "id": "session-9",
        "title": "A Fresh Look at Layouts",
        "tracks": [1]
    },
    {
        "id": "session-10",
        "title": "Real-world Applications of HTML5 APIs",
        "tracks": [2]
    },
    {
        "id": "session-11",
        "title": "Lunch",
        "tracks": [1, 2]
    },
    {
        "id": "session-12",
        "title": "Getting to Grips with JavaScript",
        "tracks": [1]
    },
    {
        "id": "session-13",
        "title": "Transforms and Animations",
        "tracks": [2]
    },
    {
        "id": "session-14",
        "title": "Web Design Adventures with CSS3",
        "tracks": [1]
    },
    {
        "id": "session-15",
        "title": "Introducing Data Access and Caching",
        "tracks": [2]
    },
    {
        "id": "session-16",
        "title": "Closing Thanks and Prizes",
        "tracks": [1, 2]
    }
];


// TODO: Task 2 - Get the "schedule" list element from the document
var list = document.getElementById("schedule");
var track1Checkbox = $('#show-track-1[type="checkbox"]');
var track2Checkbox = $('#show-track-2[type="checkbox"]');

track1Checkbox.bind("click", function(){
        displaySchedule();
});

track2Checkbox.bind("click", function(){
     displaySchedule();
});


function createSessionElement(session) {
    // TODO: Task 3 - Create a <li> element for the session.
    //       Add the session title as the <li> text content
    //       Return the <li> element
    var li = document.createElement("li");
    li.textContent = session.title;
    return li;
};

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function displaySchedule() {
    clearList();

    // TODO: Task 4 - Loop through the schedule array
    //       Create session elements
    //       Append the elements to the list
    if(track1Checkbox.is(':checked') && track2Checkbox.is(':checked')){
        for (var i = 0; i < schedule.length; i++) {
            var li = createSessionElement(schedule[i]);
                list.appendChild(li);

        }
    }
    else if(track1Checkbox.is(':checked')){
        for (var i = 0; i < schedule.length; i++){
            if(schedule[i].tracks[0] == 1){
                var li = createSessionElement(schedule[i]);
                list.appendChild(li);
            }
        }
    }

    else if(track2Checkbox.is(':checked')){
        for (var i = 0; i < schedule.length; i++){
            if(schedule[i].tracks[0] == 2 || schedule[i].tracks[1] == 2){
                var li = createSessionElement(schedule[i]);
                list.appendChild(li);
            }
        }
    }
}

displaySchedule();
