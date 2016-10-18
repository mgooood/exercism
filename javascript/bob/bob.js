//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    console.log(input);
    // hey with no input
    if(input.trim().length === 0) {
        return 'Fine. Be that way!';
    }
    // hey with a question unless uppercase
    else if(input.endsWith('?') && (input.toUpperCase() !== input || input.toLowerCase() === input)) {
        // this input is a Question
        return 'Sure.';
    }
    // hey with something shouted
    else if(input.toUpperCase() === input && input.toLowerCase() !== input){
        return "Whoa, chill out!";
    }
    // anything that falls through
    else {
        return "Whatever.";
    }
};

module.exports = Bob;



