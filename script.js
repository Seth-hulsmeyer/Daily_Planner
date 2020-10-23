//getting current day's date to populate upon opening.
        var currentDate = moment().format('LLLL');
        var currentHour = moment().format('LT')
        $("#currentDay").text(currentDate);

//a breakdown of the business day hour by hour either with html or js (9-5)
    //for loop to generate rows of time
        //if i > 12, subtract 12 from time variable = i
for(i = 9; i < 18; i += 1) {
    var time = i
    var wrapper = $("<span class = 'row'></span>");
     
     //if statement to get the time from military time to 12-hr standard
     if(i > 12){
         time -= 12
        //  timeFormat(time);
         wrapper.append("<div class = 'hour col-md-1'>" + time + "PM" + "</div>");
     }else{
        //  timeFormat(time);
         wrapper.append("<div class = 'hour col-md-1'>" + time + "AM" + "</div>");
     }

     wrapper.append("<textarea class = 'description col-md-10'>Test</textarea>");
     wrapper.append("<button class = 'saveBtn col-md-1'>Save</button>");


    $(".container").append(wrapper);
}

//OPTION FOR LATER
//function to get time variable into correct format
// function timeFormat(num){
//     num.toString.split("");

//     if (num.length === 3){
//         //insert : into index 1
//         //look into array methods Seth!!!
//     } else {
//         //insert : into index 2
//     }
//     //parseInt and num.toString.join
//     //return
// }

//color-coded past present and future using currentDate variable
//if statement arguments to add class in css file

//local storage used to save tasks on each hour by clicking save button
    //event listener