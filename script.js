//getting current day's date to populate upon opening.
        var currentDate = moment().format('LLLL');
        $("#currentDay").text(currentDate);

//a breakdown of the business day hour by hour either with html or js (9-5)
    //for loop to generate rows of time
        //if i > 12, subtract 12 from time variable = i
for(i = 900; i < 1800; i += 100) {
    var time = i
    //    time = time - 12
    if(i > 1200){
        time -= 1200
        var wrapper = $("<span class = 'row'></span>");
        wrapper.append("<div class = 'hour col-md-1'>" + time + "</div>");
        wrapper.append("<textarea class = 'time-block col-md-10'>Test</textarea>");
        wrapper.append("<button class = 'saveBtn col-md-1'>Save</button>");
        $(".container").append(wrapper);
    }else{
        var wrapper = $("<span class = 'row'></span>");
        wrapper.append("<div class = 'hour col-md-1'>" + time + "</div>");
        wrapper.append("<textarea class = 'time-block col-md-10'>Test</textarea>");
        wrapper.append("<button class = 'saveBtn col-md-1'>Save</button>");
        $(".container").append(wrapper);
    }
}


//color-coded past present and future using currentDate variable

//local storage used to save tasks on each hour by clicking save button
    //event listener