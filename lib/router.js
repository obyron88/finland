Router.configure({
//layout devient la page d'accueil
    layoutTemplate: 'layout',
});

Router.route('/', {
    name:'marque',
    waitOn: function(){
        return Meteor.subscribe("vehicules");
    },
    data: function(){
        return Vehicules.find();
    }
});
