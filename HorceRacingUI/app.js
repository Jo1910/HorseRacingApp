(function () {
    'use strict';

    var app = angular.module('horseApp', ['ui.router']);

    app.value('apiBase', 'https://localhost:44366/api/');


    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '',
                template: '<horse-list></horse-list>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<horse-list></horse-list>'
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
            },
            {
                name: 'edit',
                url: '/edit/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<edit horse-id="$resolve.horseId"></edit>'
            },
            {
                name: 'create',
                url: '/create',
                template: '<create></create>'
            },
            {
                name: 'delete',
                url: '/delete/horseId',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<delete></delete>'
            },
            {
                name: 'manage',
                url: '/manage/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                    ,
                    template: '<manage></manage>'

                }
            }

        ];

        //$locationProvider.html5Mode(true);

        states.forEach(function (state) {
            $stateProvider.state(state);
        });

    });
    

})();