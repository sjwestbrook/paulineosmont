var myApp = angular.module('myApp', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
  
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'js/partials/home.html'
    })
    .state('about', {
      url: '/about',
      templateUrl: 'js/partials/about.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'js/partials/contact.html'
    })
    .state('works', {
      url: '/works',
      templateUrl: 'js/partials/works.html'
    });
})