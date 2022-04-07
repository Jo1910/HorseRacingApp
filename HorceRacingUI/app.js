(function () {
    'use strict';

    var app = angular.module('horseApp', ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/Templates/horse-list-component.html',
            controller: 'horseController'
        });
    });

})();