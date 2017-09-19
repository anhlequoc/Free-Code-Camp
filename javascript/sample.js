function destroyer(arr) {
    // Remove all the values    
    for (var i = 1; i<arguments.length; i++) {   
        var number = arguments[i];     
        var result = arguments[0].filter(function(e) {            
            if (e === number) {
                console.log(e + "=" + number + ", false");
                return false;
            }
            console.log(e + "!=" + number + "true");
            return true;
        });
    }

    console.log(result);
    return result;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  