var Hamming = function() {};

Hamming.prototype.compute = function(string1, string2) {
    const array1 = string1.split('');
    const array2 = string2.split('');
    let hammingDistance = 0;
    let i = 0;
    let j = array1.length;
        
    if(array1.length != array2.length) {
        throw "DNA strands must be of equal length.";
    }
    for(; i < j; i++){
        if(array1[i] !== array2[i]) {
            hammingDistance++;
        }
    }
    return hammingDistance;
};
module.exports = Hamming;