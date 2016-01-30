//
// issues.js
// Date: 01/30/2016
// Includes: 
//		IssueDetail - each issue in the data 
//		IssueDetailView - each issue appearing on the page with more detail
//		CommentDetail - each comment for the specific issue
// 		CommentDetailCollection - comment collection 
// 		CommentView - each comment appearing on the page
// 		CommentListView - comment collection appearing on the page
//

// To extract the issue number from the query
var query = window.location.search.substring(1);
var vars = query.split("=");

var IssueDetail = Backbone.Model.extend({
	url: 'https://api.github.com/repos/rails/rails/issues/' + vars[1]
});

var IssueDetailView = Backbone.View.extend({
	render: function() {
		var template = _.template($("#issueDetailTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});

var issueDetail = new IssueDetail();
issueDetail.fetch().complete(function() {
	var issueDetailView = new IssueDetailView ({ el: "#issueDetail", model: issueDetail});
	issueDetailView.render();
});

// to extract the comments
// use that issue's comment link 

var CommentDetail = Backbone.Model.extend();

var CommentDetailCollection = Backbone.Collection.extend({
	model: CommentDetail,
	url: 'https://api.github.com/repos/rails/rails/issues/' + vars[1] + '/comments'
});

var CommentView = Backbone.View.extend({
	tagname: "li",
	className: "comment",

	render: function () {
		var template = _.template($("#commentsDetailTemplate").html());
		var html = template(this.model.toJSON());
		this.$el.html(html);

		return this;
	}
});

var CommentListView = Backbone.View.extend({
	tagname: "ul",

	render: function () {
		var self = this;
		this.model.each(function (comment) {
			var commentView = new CommentView({ model: comment})
			self.$el.append(commentView.render().$el);
		});
	}
});

var commentCollection = new CommentDetailCollection();
commentCollection.fetch().complete(function () {
	var commentListView = new CommentListView ({ el: "#commentsDetail", model: commentCollection});
	commentListView.render();
});