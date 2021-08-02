(function(){
    'use strict';

    angular.module('public')
    .controller('RegistrationController',RegistrationController);

    RegistrationController.$inject = ['LoginService', 'MenuItemService'];
    function RegistrationController(LoginService, MenuItemService) {
        var $ctrl = this;
        $ctrl.signIn = false;

        $ctrl.registerUser = function(userName,userLastName,userEmail,userPhone,userFavoriteDish){
            LoginService.addUser(userName,userLastName,userEmail,userPhone,userFavoriteDish);
            $ctrl.signIn = true;

            MenuItemService.getItem(userFavoriteDish);
        };

    };

})();