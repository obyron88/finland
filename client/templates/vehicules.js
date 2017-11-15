Meteor.subscribe("vehicules");

Template.vehicules.helpers({
// _.uniq repère les entrées distinctes dans la collection vehicules
    vehicules: function (){ return _.uniq(Vehicules.find({}, {
        // sort tri par ordre alphabétique avec 1 (-1 tri ordre inversé)/ fields cherche dans la collection les fields Vehicle_Make
        sort: {Vehicle_Make: 1}, fields: {Vehicle_Make: true}
    }).map(function(x) {
        return x.Vehicle_Make;
    }), true);
    }
});

