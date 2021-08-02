(function(){
    'use strict';

    angular.module('public')
    .service('MenuItemService', MenuItemService);

    MenuItemService.$inject = ['$http', 'ApiPath'];

    function MenuItemService($http, ApiPath){
        var service = this;
        var dataitem;

        service.getItem = function(food){
            return $http.get(ApiPath + '/menu_items.json')
            .then(function (response) {
                for(var i = 0; i < response.data.menu_items.length; i++){
                    if(food != "" &&  response.data.menu_items[i].short_name.indexOf(food.toUpperCase()) != -1){
                        dataitem = {
                            name: response.data.menu_items[i].name,
                            description: response.data.menu_items[i].description
                        };
                        console.log(response.data.menu_items);
                        //return response.data.menu_items[i];
                    }
                };
                //console.log(response.data.menu_items);
                //return response.data.menu_items;
            });
        };

        service.getData = function(){
            return dataitem;
        }
    };

})();