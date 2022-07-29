// time variables
var datetime = null,
        date = null;
//setting up the moment format for #currentday
var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};
//set date and time at top of the page each time document loads. 
//set a one second interval to the timer to update the #currentday span in real time. 
$(document).ready(function(){
    datetime = $('#currentDay');
    update();
    setInterval(update, 1000);
});
//defining the present hour using military time format
var currentHour = moment().format("HH");
//run a series of conditionals on each item with the class "timeblock"
$('.timeblock').each(function () {
  //define 'timeblock' as both its class and id, allowing the conditionals 
  //to check for the number in military time format
    var timeBlock = $(this).attr('id');
    //past, present, and future conditionals
    if (currentHour == timeBlock) {
      $(this).addClass('present');
    } else if (currentHour < timeBlock) {
      $(this).removeClass('present');
      $(this).addClass('future');
    } else if (currentHour > timeBlock) {
      $(this).removeClass('future');
      $(this).addClass('past');
    }
  });
  //set dynamic background colors to jumbotron based on time.
  if (currentHour>09 && currentHour<17) {
    $('.jumbotron').addClass('present');
  } else if (currentHour<09) {
    $('.jumbotron').addClass('future');
  } else if (currentHour>17) {
    $('.jumbotron').addClass('past');
  }
  // //if timeblock is in the past, set the disabled attribute to true
  // if($('.timeblock').hasClass('past')) {
  //   $('.timeblock').attr('disabled', 'true');
  // };
  //save button event listener
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    //the number after the '-' of the parent of the button that fired this event
    var time = $(this).parent().attr('class').split('-')[1];
    //the input value of the time block next to the button that fired this event. 
    var value = $(this).siblings(".timeblock").val();

    //before closing this function, save an item to local storage with the key of 'time' and value of 'value'
    localStorage.setItem(time, value);
  });
  //set text of timebox to input saved in local storage corresponding to the key extracted from its save button
  $('#09').text(localStorage.getItem('09'));
  $('#10').text(localStorage.getItem('10'));
  $('#11').text(localStorage.getItem('11'));
  $('#12').text(localStorage.getItem('12'));
  $('#13').text(localStorage.getItem('13'));
  $('#14').text(localStorage.getItem('14'));
  $('#15').text(localStorage.getItem('15'));
  $('#16').text(localStorage.getItem('15'));
  $('#17').text(localStorage.getItem('16'));
  
