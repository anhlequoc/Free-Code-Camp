var numberToFilter = [];
function filterValue(value) {
    for (var i = 0; i<numberToFilter.length; i++) {
      if (value === numberToFilter[i]) {
        return false;
      }
    }
    return true;
}

function destroyer(arr) {
  // Remove all the values

  for (var i = 1; i<arguments.length; i++) {
    numberToFilter[i-1] = arguments[i];
  }
  var resultArr = arguments[0].filter(filterValue);
  numberToFilter = [];
  console.log(resultArr);
  return resultArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
destroyer([3, 5, 1, 2, 2], 2, 3, 5);
destroyer([2, 3, 2, 3], 2, 3);
destroyer(["tree", "hamburger", 53], "tree", 53);
