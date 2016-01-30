====================================================================
							 	 
						Github Issues Viewer
						   01/30/2016

====================================================================

	Challenge : Developing a new Issues viewer for Github, using 
				Backbone.js.

				This project retrieves data from Github Rails link
				that is given as :

				https://api.github.com/repos/rails/rails/issues

====================================================================

	Default page : (index.html)

			The default page displays all the data from the link, 
			showing the following information for each issue:

				- Issue number and title
				- Labels
				- Reporter's user name and Gravatar
				- The first 140 characters of the summary 
				  (ending on a clean line or word) 

			Once the data is retrieved from the link, Backbone.js 
			View displays the data collection using Underscore.js 
			template to determine the DOM for each issue. 

			Helper.js includes the cleanLine function for the 
			clean line requirement, where the spacing is taken 
			care of to ensure that the desription does not end 
			in the middle of a word.

			Helper.js also includes the calculateTime function 
			to determine the time the user posted that issue. 

	Issues Page  : (issue.html) 

			The issues page displays an individual issue from
			the default page with more detailed information:

				- Issue title and state 
				- Labels
				- Reporter's user name and Gravatar
				- The complete summary 

			On the issues page, the issue number is extracted 
			from the query and used to retrieve that issue's
			specific information rather than retrieving the 
			whole data collection. 

			This implementation can also be done using Backbone.js's
			Router approach. 

			If there are comments on an issue, they are fetched 
			and displayed with their gravatar, user name and comment. 

			Helper.js includes the findUser function where it
			detects a username within the body section of an 
			issue or a comment. It is implemented using regex. 
			If any username is found, the body section is modified 
			with a proper <a> tag to give a link to that user's 
			GitHub page.

====================================================================

	Time Spent for this Project : 8 hours 

	- Bootstrap is used to style the pages. 

	Challenges and Issues for this Project : 

	- It was my first time using Backbone.js and Underscore.js,
	therefore I believe it would have taken me less time to 
	implement the requirements and more freedom to style the pages
	if I had used another framework that I am comfortable with such
	as Angular.js. 

	- I believe all of the requirements have been met with the 
	exception of the pagination requirement: only 25 results
	are displayed per page, rather than all of the data. 

====================================================================

















