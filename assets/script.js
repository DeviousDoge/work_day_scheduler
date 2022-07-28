var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function(){
    datetime = $('#currentDay');
    update();
    setInterval(update, 1000);
});

var currentHour = moment().format("HH");
$('.timeblock').each(function () {
    var timeBlock = $(this).attr('id');
    
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

  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var time = $(this).parent().attr('class').split('-')[1];
    
    if($('.timeblock').hasClass(this)) {
      var value = $('.timeblock').textContent();
    };
     
    
    localStorage.setItem(time, value);
     console.log(value);
  });

  $('#09').text(localStorage.getItem('09'));
  $('#10').text(localStorage.getItem('10'));
  $('#11').text(localStorage.getItem('11'));
  $('#12').text(localStorage.getItem('12'));
  $('#13').text(localStorage.getItem('13'));
  $('#14').text(localStorage.getItem('14'));
  $('#15').text(localStorage.getItem('15'));
  $('#16').text(localStorage.getItem('15'));
  $('#17').text(localStorage.getItem('16'));
  
