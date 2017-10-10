function getIndexToIns(arr, num) {
    var sortedArr = arr.sort(function(a, b) {
        return a - b;
    });
    var result;
    for(var i = sortedArr.length-1; i>=0; i--) {       
        if (num <= sortedArr[i]) {            
            result = sortedArr.indexOf(sortedArr[i]);
        } else if (result === undefined) {
            result = sortedArr.indexOf(sortedArr[sortedArr.length - 1]) + 1;
        }
    }
    console.log(result);
    return result;
  }
  
function rot13(str) { // LBH QVQ VG!    
    var arr = str.split('');
    var result = [];
    
    arr.forEach(function(item){
        var charCode = item.charCodeAt();    
        if ((65 <= charCode && charCode <= 77) || (97 <= charCode && charCode <= 109)) {
            item = String.fromCharCode(charCode+13);
        } else if ((78 <= charCode && charCode <= 90) || (110 <= charCode && charCode <= 122)) {
            item = String.fromCharCode(charCode-13);
        }        
        result.push(item);
    });
    result = result.join('');
    console.log(result);
    return result;
}
  
// Change the inputs below to test
rot13("SERR PBQR PNZC");
  