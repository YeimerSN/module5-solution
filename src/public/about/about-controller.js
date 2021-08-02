(function(){
    'use strict';
    angular.module('public')
    .controller('aboutController', aboutController);

    aboutController.$inject = ['data', 'dataItem'];
    function aboutController(data, dataItem){
        var $ctrl = this;
        $ctrl.signIn = false;
        $ctrl.itemFound = false;

        if(data){
            $ctrl.signIn = true;
            $ctrl.name = data.name;
            $ctrl.lastName = data.lastName;
            $ctrl.email = data.email;
            $ctrl.phone = data.phone;
            $ctrl.favoriteDish = data.favoriteDish;
        }

        if(dataItem){
            $ctrl.itemFound = true;
            $ctrl.nameItem = dataItem.name;
            $ctrl.description = dataItem.description;
        }
    };

})();