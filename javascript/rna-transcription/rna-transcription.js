const DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dnaString) {
    const dnaArray = dnaString.split('');
    let rnaString = "";
    
    if(dnaString.length < 1){
        throw new Error("Invalid DNA string.");
    } else {
        return dnaArray.map(getCode).join('');
    }
}

const getCode = function(key){
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