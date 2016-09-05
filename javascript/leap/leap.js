var Year = function(year) {
    this.year = year;
};

Year.prototype.isLeap = function() {
    var isDivisibleBy4 = this.year % 4 === 0;
    var isDivisbleBy100 = this.year % 100 === 0;
    var isDivisbleBy400 = this.year % 400 === 0;
    
    if(isDivisibleBy4 && (!isDivisbleBy100 || isDivisbleBy100 && isDivisbleBy400)) {
        return true;
    } 
    return false;
};

module.exports = Year;