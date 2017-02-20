function titleCase(str) {
	str = str.toLowerCase();
	var strArray = str.split(' ');
	for (var i = 0; i<strArray.length; i++) {
		strArray[i] = strArray[i].replace(strArray[i].charAt(0), strArray[i].charAt(0).toUpperCase());
	}
	str = strArray.join(' ');
	console.log(str);
  return str;
}

titleCase("I'm a little tea pot");
