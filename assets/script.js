var now = moment().format("HH");
function clock() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
};

setInterval(clock, 1000);

function rowColor() {
    for (i = 0; i < 10; i++) {
        var rowNumber = parseInt($("#row" + i).text());
        if (rowNumber < 9) {
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

rowColor();