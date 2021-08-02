(function(){
    'use strict';
    angular.module('common')
    .service('LoginService', LoginService);

    function LoginService(){
        var service = this;
        var dataUser;

        service.addUser = function(userName,userLastName,userEmail,userPhone,userFavoriteDish){
            dataUser = {
                name: userName,
                lastName: userLastName,
                email: userEmail,
                phone: userPhone,
                favoriteDish: userFavoriteDish
            };
        };

        service.getUser = function(){
            return dataUser;
        };
    };

})();