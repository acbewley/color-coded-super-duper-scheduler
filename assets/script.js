var now = moment().format("HH");
var tasks = []
//creates clock and displays it to the page
function clock() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};
//sets once second interval update to the clock
setInterval(clock, 1000);
//resets task list at midnight
if (now === 00) {
    localStorage.clear("tasks")
}
//color codes rows based on current time
function rowColor() {
    for (i = 0; i < 10; i++) {
        var rowNumber = parseInt($("#row" + i).text());

        if (rowNumber < 6) {
            rowNumber = rowNumber + 12;
        };

        if (rowNumber < now) {
            $("#row" + i).addClass("table-danger");
        } else if (rowNumber === now) {
            $("#row" + i).addClass("table-secondary");
        } else if (rowNumber > now) {
            $("#row" + i).addClass("table-success");
        };
    };
};
//displayed stored tasks to the page on load
function initTasks() {
    var storedTasks = JSON.parse(localStorage.getItem("tasks"))
    if (storedTasks != null) {
        tasks = storedTasks
        for (i = 0; i < tasks.length; i++) {
            if (tasks[i] === null) {
                
            } else {
                $("#comment" + i).text(tasks[i])
            }
        }
    }
}
//various event listeners to save input and write to page
$("#button9").on("click", function () {
    var task9 = $("#input9").val()
    if (task9 === "") {
        alert("You must input a task!")
    } else {
        $("#comment0").text(task9)
        tasks[0] = task9
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button10").on("click", function () {
    var task10 = $("#input10").val()
    if (task10 === "") {
        alert("You must input a task!")
    } else {
        $("#comment1").text(task10)
        tasks[1] = task10
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button11").on("click", function () {
    var task11 = $("#input11").val()
    if (task11 === "") {
        alert("You must input a task!")
    } else {
        $("#comment2").text(task11)
        tasks[2] = task11
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button12").on("click", function () {
    var task12 = $("#input12").val()
    if (task12 === "") {
        alert("You must input a task!")
    } else {
        $("#comment3").text(task12)
        tasks[3] = task12
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button1").on("click", function () {
    var task1 = $("#input1").val()
    if (task1 === "") {
        alert("You must input a task!")
    } else {
        $("#comment4").text(task1)
        tasks[4] = task1
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button2").on("click", function () {
    var task2 = $("#input2").val()
    if (task2 === "") {
        alert("You must input a task!")
    } else {
        $("#comment5").text(task2)
        tasks[5] = task2
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button3").on("click", function () {
    var task3 = $("#input3").val()
    if (task3 === "") {
        alert("You must input a task!")
    } else {
        $("#comment6").text(task3)
        tasks[6] = task3
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button4").on("click", function () {
    var task4 = $("#input4").val()
    if (task4 === "") {
        alert("You must input a task!")
    } else {
        $("#comment7").text(task4)
        tasks[7] = task4
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

$("#button5").on("click", function () {
    var task5 = $("#input5").val()
    if (task5 === "") {
        alert("You must input a task!")
    } else {
        $("#comment8").text(task5)
        tasks[8] = task5
        tasks.join()
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }
})

rowColor();
initTasks();