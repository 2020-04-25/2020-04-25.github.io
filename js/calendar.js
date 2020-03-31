function getMonthName(monthNumber) {
    var months = [
        '1월',
        '2',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];
    return months[monthNumber - 1];
}

jQuery(document).ready(function($){
	var theMonth = $('.month');
	var weeks = $('.week');
	var weekDays = $('.week-days');
	var weddingDay = new Date('2020-04-25T12:00:00');
	var monthNumber = weddingDay.getMonth() + 1;
    var month = monthNumber - 1;
    var dayNumber = weddingDay.getDate();
	var year = weddingDay.getFullYear();

	theMonth.text(monthNumber + '/' + dayNumber);
    theMonth.attr('data-month', monthNumber);

    var date = new Date(year, month, 1);
    var days = [];
    while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }

	var i = 0;
	for (; i < days[0].getDay(); i++ ) {
        $('.event-calendar .1').append('<div class="col"/>');
	}
	
    $(days).each(function(index) {
        var index = index + 1;
		function appendDayInWeek(weekNumber, dayNumber) {
          	$('.event-calendar .' + weekNumber).append('<div class="col' + ' day-' + dayNumber + '" data-month="' + monthNumber + '" data-day="' + index + '" data-day-num="' + dayNumber + '" data-year="' + year + '">' + index + '</div>');
		}
		appendDayInWeek(parseInt(i/7)+1, this.getDay())
		i++;
    });

	for (; i % 7 != 0; i++) {
		$('.event-calendar .' + (parseInt(i/7)+1)).append('<div class="col"/>');
	}

	$('.event-calendar div[data-day="' + weddingDay.getDate() + '"]').addClass('wedding-day');
});
