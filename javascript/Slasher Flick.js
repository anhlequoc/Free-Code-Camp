function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  console.log(arr);
  return arr;
}

slasher([1, 2, 3], 9);

// will make consufed - be careful
function slasher2(arr, howMany) {
  // it doesn't always pay to be first
  removed = arr.splice(0, howMany);
  console.log(removed); 
  return removed;
}

slasher2([1, 2, 3], 9);//return [1,2,3] due to line 13