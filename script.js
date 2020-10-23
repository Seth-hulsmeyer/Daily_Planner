//getting current day's date to populate upon opening.
        var currentDate = moment().format('LLLL');
        $("#currentDay").text(currentDate);

//a breakdown of the business day hour by hour either with html or js (9-5)
    //for loop to generate rows of time
        //if i > 12, subtract 12 from time variable = i
for(i = 900; i < 1800; i += 100) {
    var time = i
    //    time = time - 12
    //work on spacing
        var wrapper = $("<span class = 'row'></span>");
        wrapper.append("<div class = 'hour'>" + time + "</div>");
        wrapper.append("<textarea class = 'time-block'>Test</textarea>");
        wrapper.append("<button class = 'saveBtn'>Save</button>");
        $(".container").append(wrapper);
}


//color-coded past present and future using currentDate variable

//local storage used to save tasks on each hour by clicking save button
    //event listener