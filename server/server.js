Meteor.methods({
    'submitPost': function(title, body){
      Blogs.insert({
      	title:title, 
      	body:body,
      	time: new Date(),
      	owner: Meteor.user().username
      });
    }
});