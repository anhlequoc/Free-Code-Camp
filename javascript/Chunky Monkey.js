function chunkArrayInGroups(arr, size) {
 // Break it up.
 var subArr = [];
 var resultArr = [];
 for (var i = 0; i < arr.length; i += size) {
 	subArr = arr.slice(i, i + size);
 	resultArr.push(subArr);
 }
 console.log(resultArr);
 return resultArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 3);
