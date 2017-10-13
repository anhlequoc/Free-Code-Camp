function restrict(value) {
  if (typeof(value) === 'number') {
    if ( value === 0 || isNaN(value) === true){
      return false;
    }
  } else if (value === false || value === null || value === "" || typeof(value) === 'undefined'){
    return false;
  }
  return true;
}

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  //arr.map(item => console.log(typeof(item)));
  var arr2 = arr.filter(restrict);
  console.log(arr2);
  return arr2;
}

// bouncer([7, "ate", "", false, 9]);
// console.log('------');
bouncer([false, null, 0, NaN, undefined, ""]);
console.log('------');
bouncer([1, null, NaN, 2, undefined]);
console.log('------');
