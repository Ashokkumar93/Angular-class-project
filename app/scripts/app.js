'use strict';

/**
 * @ngdoc overview
 * @name angularJsApp
 * @description
 * # angularJsApp
 *
 * Main module of the application.
 */
angular
  .module('myApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'myApp.mainCtrlModule',
    'myApp.homeCtrlModule',
    'myApp.aboutCtrlModule',
    'myApp.contactsCtrlModule',
    'myApp.actionsCtrlModule',
    'myApp.githubCtrlModule',
    'myApp.shoppingCtrlModule',
    'myApp.shoppingdetailsCtrlModule',
    'myApp.shoppingCartCheckoutCtrlModule'

  ])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode();
    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'homeCtrl'
      })
      .when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'homeCtrl',
        controllerAs: 'homeCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about/about.html',
        controller: 'aboutCtrl',
        controllerAs: 'aboutCtrl'
      })
      .when('/contacts', {
        templateUrl: 'views/contacts/contacts.html',
        controller: 'contactsCtrl',
        controllerAs: 'contactsCtrl'
      })
      .when('/actions', {
        templateUrl: 'views/actions/actions.html',
        controller: 'actionsCtrl',
        controllerAs: 'actionsCtrl'
      })
       .when('/github', {
        templateUrl: 'views/github/github.html',
        controller: 'githubCtrl',
        controllerAs: 'githubCtrl'
      })
        .when('/ecommerce', {
        templateUrl: 'views/shopping/shopping.html',
        controller: 'shoppingCtrl',
        controllerAs: 'shoppingCtrl'
      })
      .when('/ecommerce/:id', {
        templateUrl: 'views/shopping/shoppingdetails.html',
        controller: 'shoppingdetailsCtrl',
        controllerAs: 'shoppingdetailsCtrl'
      })
      .when('/checkout', {
        templateUrl: 'views/shopping/cartcheckout.html',
        controller: 'shoppingCartCheckoutCtrl',
        controllerAs: 'shoppingCartCheckoutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
