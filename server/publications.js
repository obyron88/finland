Meteor.publish("vehicules", function(){
    return Vehicules.find();
});

Meteor.publish(null, function (){
    return Meteor.roles.find({})
});
