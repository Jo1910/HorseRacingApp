(function () {
    'use strict';

    // var app = angular.module('horseApp', ['ngRoute']);

    // app.config(function ($routeProvider) {
    //     $routeProvider.when('/', {
    //         templateUrl: '/App/Templates/horse-list-component.html',
    //         controller: 'horseController'
    //     });
    // });

    var app = angular.module('horseApp', ['ui.router']);

    app.value('apiBase', 'https://localhost:44366/api/')

    app.config(function ($stateProvider) {
        var states = [
            {
                name: 'home',
                url: '',
                template: '<main-component></main-component>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'horses',
                url: '/horses',
                template: '<horse-list></horse-list>'
            },
            {
                name: 'horse',
                url: '/horse/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<horse horse-id="$resolve.horseId"></horse>',
                // params: { horseId: null }
            },
            {
                name: 'edit',
                url: '/edit/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<edit horse-id="$resolve.horseId></edit>'
            },
            {
                name: 'create',
                url: '/create',
                template: '<create></create>'
            }

        ];

        
        states.forEach(function (state) {
            $stateProvider.state(state);
        });

    });

})();