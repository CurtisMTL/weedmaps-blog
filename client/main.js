Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

Template.addPost.events({
	'submit #myForm': function (e) {
		e.preventDefault();
		var title = $('#blogTitle').val();
		var body = $('#blogBody').val();
		var owner = Meteor.userId();
		//prevent blank posts
		if (title.length && body.length) {
			Meteor.call('submitPost', title, body, owner)
		}
	},
});

Template.blogPosts.blogs = function() {
	return Blogs.find();
}

Template.blogPosts.helpers({

	'click .remove': function(e){
		e.preventDefault();
	    Blogs.remove({_id:this._id});  
	}
})