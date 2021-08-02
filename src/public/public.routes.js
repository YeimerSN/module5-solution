(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('signin',{
      url: '/signin',
      templateUrl: 'src/public/sign-up/sign-in.form.html',
      controller: 'RegistrationController',
      controllerAs: 'registrationCtrl'
    })
    .state('about',{
      url: '/about',
      templateUrl: 'src/public/about/about-main.html',
      controller: 'aboutController',
      controllerAs: 'aboutCtrl',
      resolve: {
        data: ['LoginService', function(LoginService){
          return LoginService.getUser();
        }],
        dataItem: ['MenuItemService', function(MenuItemService){
          return MenuItemService.getData();
        }]
      }
    });

}
})();
