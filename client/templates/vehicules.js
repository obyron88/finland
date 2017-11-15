Meteor.subscribe("vehicules");

Template.marque.helpers({
// _.uniq repère les entrées distinctes dans la collection vehicules
    vehicules: function (){ return _.uniq(Vehicules.find({}, {
        // sort tri par ordre alphabétique avec 1 (-1 tri ordre inversé)/ fields cherche dans la collection les fields Vehicle_Make
        sort: {VehicleMake: 1}, fields: {VehicleMake: true}
    }).map(function(x) {
        return x.VehicleMake;
    }), true);
    }
});

Template.modèle.helpers({
    model: function (){ return _.uniq(Vehicules.find({}, {
        // sort tri par ordre alphabétique avec 1 (-1 tri ordre inversé)/ fields cherche dans la collection les fields Vehicle_Make
        sort: {VehicleDescription: 1}, fields: {VehicleDescription: true}
    }).map(function(x) {
        return x.VehicleDescription;
    }), true);
    }
});
// Template.marque.events({
//     "select #marque"(event) {
//         event.preventDefault();
//         var marqueselect =  event.target.marque.value;
//
//     }
// });