function daytimeService(date) {
	var curDayTime = 'day';
	if(date.getHours() <= 12){
		curDayTime = 'morning';
	}
	else if(date.getHours() <= 17){
		curDayTime = 'day';
	}
	else if(date.getHours() <=24){
		curDayTime = 'evening';
	}
	//console.log(curDayTime);

	return curDayTime;
}

module.exports = daytimeService;