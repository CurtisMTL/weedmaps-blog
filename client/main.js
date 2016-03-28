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

Template.blogPosts.events({

	'click .remove': function(e){
	    Blogs.remove({_id:this._id});  
	}
})

Template.blogPosts.helpers({
	'isOwner': function() {
		if(Meteor.user().username===this.owner) {
			return true
		} else {
			return false
		}
	}
})