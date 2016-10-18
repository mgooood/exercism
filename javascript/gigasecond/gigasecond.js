var Gigasecond = function(date) {
    this.startDate = date;
};

Gigasecond.prototype.date = function() {
    const GIGASECOND_IN_SECONDS = 1000000000;
    const SECONDS_TO_MILLISECONDS = GIGASECOND_IN_SECONDS * 1000;
    var startTime = this.startDate.getTime();
	var endDate = new Date(startTime + SECONDS_TO_MILLISECONDS);
	return endDate;
}    

module.exports = Gigasecond;


