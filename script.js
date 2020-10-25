//getting current day's date to populate upon opening.
    var currentDate = moment().format('LLLL');
    //displaying current date and time to page
    $("#currentDay").text(currentDate);

// Event handler for 9AM ------------------------------------
var save9Task = document.getElementById("9button")
var input9Text = document.getElementById("9task")
// Event listener to save to local storage
save9Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem9 = input9Text.value
    localStorage.setItem("toDoItem9", toDoItem9);
});
//Retrieves data from local storage, and saves on refresh
var text9Entered = localStorage.getItem("toDoItem9");
input9Text.textContent = text9Entered;
//----------------------------------------------------------

// Event handler for 10AM ------------------------------------
var save10Task = document.getElementById("10button")
var input10Text = document.getElementById("10task")
// Event listener to save to local storage
save10Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem10 = input10Text.value
    localStorage.setItem("toDoItem10", toDoItem10);
});
//Retrieves data from local storage, and saves on refresh
var text10Entered = localStorage.getItem("toDoItem10");
input10Text.textContent = text10Entered;
//-----------------------------------------------------------

// Event handler for 11AM ------------------------------------
var save11Task = document.getElementById("11button")
var input11Text = document.getElementById("11task")
// Event listener to save to local storage
save11Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem11 = input11Text.value
    localStorage.setItem("toDoItem11", toDoItem11);
});
//Retrieves data from local storage, and saves on refresh
var text11Entered = localStorage.getItem("toDoItem11");
input11Text.textContent = text11Entered;
//------------------------------------------------------------

// Event handler for 12PM ------------------------------------
var save12Task = document.getElementById("12button")
var input12Text = document.getElementById("12task")
// Event listener to save to local storage
save12Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem12 = input12Text.value
    localStorage.setItem("toDoItem12", toDoItem12);
});
//Retrieves data from local storage, and saves on refresh
var text12Entered = localStorage.getItem("toDoItem12");
input12Text.textContent = text12Entered;
//-----------------------------------------------------------

// Event handler for 1PM ------------------------------------
var save1Task = document.getElementById("1button")
var input1Text = document.getElementById("1task")
//Event listener to save to local storage
save1Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem1 = input1Text.value
    localStorage.setItem("toDoItem1", toDoItem1);
});
//Retrieves data from local storage, and saves on refresh
var text1Entered = localStorage.getItem("toDoItem1");
input1Text.textContent = text1Entered;
//-----------------------------------------------------------

// Event handler for 2PM ------------------------------------
var save2Task = document.getElementById("2button")
var input2Text = document.getElementById("2task")
// Event listener to save to local storage
save2Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem2 = input2Text.value
    localStorage.setItem("toDoItem2", toDoItem2);
});
//Retrieves data from local storage, and saves on refresh
var text2Entered = localStorage.getItem("toDoItem2");
input2Text.textContent = text2Entered;
//----------------------------------------------------------

// Event handler for 3PM ------------------------------------
var save3Task = document.getElementById("3button")
var input3Text = document.getElementById("3task")
// Event listener to save to local storage
save3Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem3 = input3Text.value
    localStorage.setItem("toDoItem3", toDoItem3);
});
//Retrieves data from local storage, and saves on refresh
var text3Entered = localStorage.getItem("toDoItem3");
input3Text.textContent = text3Entered;
//----------------------------------------------------------

// Event handler for 4PM -----------------------------------
var save4Task = document.getElementById("4button")
var input4Text = document.getElementById("4task")
// Event listener to save to local storage
save4Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem4 = input4Text.value
    localStorage.setItem("toDoItem4", toDoItem4);
});
//Retrieves data from local storage, and saves on refresh
var text4Entered = localStorage.getItem("toDoItem4");
input4Text.textContent = text4Entered;
//-----------------------------------------------------------

// Event handler for 5PM ------------------------------------
var save5Task = document.getElementById("5button")
var input5Text = document.getElementById("5task")
// Event listener to save to local storage
save5Task.addEventListener("click", function (event) {
    event.preventDefault();
    var toDoItem5 = input5Text.value
    localStorage.setItem("toDoItem5", toDoItem5);
});
//Retrieves data from local storage, and saves on refresh
var text5Entered = localStorage.getItem("toDoItem5");
input5Text.textContent = text5Entered;
//----------------------------------------------------------

// Conditional color-coding by time
//global variable for present hour saved as a number
 var currentHour = parseInt(moment().hours());

 // 
 $(".time-block").each(function () {
    var timeVar = +($(this).attr("id"));
    var taskBlockTime = parseInt(timeVar, ("-")[1])
        //if a time-block is in the past, color it grey with the past class
        if (currentHour > taskBlockTime) {
            $(this).addClass("past")
        }
        //if a time-block is in the present, color it red with the present class
        else if (currentHour === taskBlockTime) {
            $(this).addClass("present")
        }
        //if a time-block is in the future, color it green with the future class
        else if (currentHour < taskBlockTime) {
            $(this).addClass("future")
        }
})