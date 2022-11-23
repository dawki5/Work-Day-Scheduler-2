//Current Date
var currentDay = document.querySelector('#currentDay');
setInterval(function () {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

// Adds functionality to the save button 
$('.saveBtn').on('click', function (event) {
    event.preventDefault();

    // saves inputs to local storage
    var inputField = $(this).siblings('.input').val();
    var inputTime = $(this).parent().attr('id');

    localStorage.setItem(inputTime, inputField);
});

// Gets stored inputs from local storage
$('#Time08AM .input').val(localStorage.getItem('Time08AM'));
$('#Time09AM .input').val(localStorage.getItem('Time09AM'));
$('#Time10AM .input').val(localStorage.getItem('Time10AM'));
$('#Time11AM .input').val(localStorage.getItem('Time11AM'));
$('#Time12PM .input').val(localStorage.getItem('Time12PM'));
$('#Time13PM .input').val(localStorage.getItem('Time13PM'));
$('#Time14PM .input').val(localStorage.getItem('Time14PM'));
$('#Time15PM .input').val(localStorage.getItem('Time15PM'));
$('#Time16PM .input').val(localStorage.getItem('Time16PM'));
$('#Time17PM .input').val(localStorage.getItem('Time17PM'));

// Updates the .input boxes with provided css styling

function updateColor() {

    var currentTime = moment().format('HHA');

// loops over each time block in html
    $('.time-block').each(function () {
        // Fixes on 1 attribute after Time which is 08, 09, 10, etc
        var scheduleTime = $(this).attr("id").split("Time")[1];
        //["8", "9", "10 ", "11", "12", "1", "2", "3", "4", "5",]
        
        if (currentTime === scheduleTime) {
            $(this).addClass("present");
          } else if (currentTime < scheduleTime) {
            $(this).removeClass("present");
            $(this).addClass("future");
          } else if (currentTime > scheduleTime) {
            $(this).removeClass("future");
            $(this).addClass("past");
          }
        })
}

// Runs the function above
updateColor();


// Returns saved entry text for multiple uses
  $(".saveBtn").click(function(){
  $('#saved').empty().show().html('Entry Saved!').delay(3000).fadeOut(300);
  });