//Check for Palindromes

function palindrome(str) {
  // Check regex
  var regex = /\s|!|@|#|%|\$|\^|\&|\*|\(|\)|\_|\,|\.|\:|\-|\/|\\/ig; //match if str has any symbol orspace

  if (str.match(regex)){
  	str = str.replace(regex,"");
  }
  str = str.toLowerCase();
  var strArray = str.split('');
  var reverseStr = strArray.reverse().join('');
  if (reverseStr === str){
  	console.log (str + "-" + reverseStr);
  	return true;
  }
  return false;
}