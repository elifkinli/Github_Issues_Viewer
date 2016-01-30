//
// helper.js
// Date: 01/30/2016
// Includes: 
// 		cleanLine - cleans cut line
//		calculateTime - calculates time difference
//		findUser - detects username in body
// 

var cleanLine = function (body) {
	var maxLength = 141;
	if (body.length < 140) {
		return body;
	} else {
		// finds where the space starts 
		// and returns body from there on 
		for (i = maxLength; i > 0 ; i--) {
			if (body.charAt(i) == ' ')
				return body.slice(0, i);
		}
	}
}

var calculateTime = function (date) {
	var current_time = new Date();
	var created_time = new Date(date);

	// to convert the difference to minutes 
	var timeDiff = Math.ceil((current_time - created_time) / 60000);
	if (timeDiff < 60) {
		return timeDiff + ' minutes';
	} else {
		// to convert the difference to hours
		var timeDiffhour = Math.ceil(timeDiff / 60);
		if (timeDiffhour < 24) {
			return timeDiffhour + ' hours';
		} else {
			// to convert the difference to days
			var timeDiffday = Math.ceil(timeDiffhour / 24);
			return timeDiffday + ' days';
		}
	}
}

var findUser = function (body) {
	// regex to find a username
	var reUser = /@[\S]+/g;
	var foundUser = body.match(reUser);

	if (foundUser == null) {
		return body;
	} else {
		// for each username that is found, 
		// replace it with a <a> tag
		for (var i = 0; i < foundUser.length; i ++) {
			var str = foundUser[i];
			body = body.replace(str, "<a href=http://github.com/"+str.slice(1,str.length)+">"+ str+"</a>");
		}

		return body;
	}
}
