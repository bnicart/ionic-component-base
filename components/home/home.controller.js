'use strict';

function HomeCtrl ($scope) {
  console.log("Hello from HomeCtrl");
}

HomeCtrl.$inject = ['$scope'];

angular.module('app')
.controller('HomeCtrl', HomeCtrl);
