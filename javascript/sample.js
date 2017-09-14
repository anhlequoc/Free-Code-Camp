function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    arr = arr.filter(function(e) {
        if (e === false || e === null || e === 0 || e === "" || e === "" || e === undefined) {
            return false;
        } else if (isNaN(e)) {
            return false;
        }        
        return true;
    });
    
    console.log(arr);  
    return arr;
  }
  bouncer([7, "ate", "", false, 9]);
  bouncer(["a", "b", "c"])
  bouncer([false, null, 0, NaN, undefined, ""]);

  