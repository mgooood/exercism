var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaString) {
    let rnaString = "";
    let i = 0;
    let j = dnaString.length;
    if(dnaString.length < 1){
        throw new Error("Invalid DNA string.");
    } else {
        for(; i < j; i++){
            rnaString += getCode(dnaString[i]);
        }
    }
    return rnaString;
}
var getCode = function(key){
    switch (key) {
        case 'G':
            return 'C'
        case 'C':
            return 'G';
        case 'T':
            return 'A';
        case 'A':
            return 'U';

    }
}

module.exports = DnaTranscriber;