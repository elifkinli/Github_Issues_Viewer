//
// index.js
// Date: 01/30/2016
// Includes: 
//		Issue - each issue in the data 
// 		IssueCollection - data collection 
//		IssueView - each issue appearing on the page
//		IssueListView - data collection appearing on the page
// 

var Issue = Backbone.Model.extend();

var IssueCollection = Backbone.Collection.extend({
	model: Issue,
	url: 'https://api.github.com/repos/rails/rails/issues'
});

var IssueView = Backbone.View.extend({
	tagName: "li",
	className: "issue",

	render: function () {
		var template = _.template($("#issueTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});

var IssueListView = Backbone.View.extend({
	tagname: "ul",

	render: function () {
		var self = this;
		this.model.each(function (issue) {
			var issueView = new IssueView({ model: issue });
			self.$el.append(issueView.render().$el);
		});
	}
});

// Once the issueCollection is fetched from the link, 
// it will call the Backbone View
var issueCollection = new IssueCollection();
issueCollection.fetch().complete(function () {
	var issueListView = new IssueListView({ el: "#issues", model: issueCollection });
	issueListView.render();
});
