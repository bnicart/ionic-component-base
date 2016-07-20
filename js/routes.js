angular.module('app')
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: '/home',
    templateUrl: 'components/home/home.html',
    controller: 'HomeCtrl'
  })

  $urlRouterProvider.otherwise('/home');
});
