(function () {
    'use strict';

    var app = angular.module('horseApp', ['ui.router', 'ui.bootstrap', 'ngAnimate']);

    app.value('apiBase', 'https://localhost:44366/api/');

    app.directive('date', function (dateFilter) {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                var dateFormat = attrs['date'] || 'dd-MM-yyyy';

                ctrl.$formatters.unshift(function (modelValue) {
                    return dateFilter(modelValue, dateFormat);
                });
            }
        }
    });
   
    app.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        var states = [
            {
                name: 'home',
                url: '',
                template: '<home></home>'
            },
            {
                name: 'home2',
                url: '/',
                template: '<home></home>'
            },
            {
                name: 'admin',
                url: '/admin',
                template: '<admin></admin>'
            },
            {
                name: 'genders',
                url: '/admin/genders',
                template: '<gender-list></gender-list>'
            },
            {
                name: 'gender',
                url: '/admin/gender/{genderId}',
                resolve: {
                    genderId: function ($stateParams) {
                        return $stateParams.genderId;
                    }
                },
                template: '<gender gender-id="$resolve.genderId"></gender>'
            },
            {
                name: 'createGender',
                url: '/admin/genders/create',
                template: '<create-gender></create-gender>'
            },
            {
                name: 'editGender',
                url: '/admin/gender/edit/{genderId}',
                resolve: {
                    genderId: function ($stateParams) {
                        return $stateParams.genderId;
                    }
                },
                template: '<edit-gender gender-id="$resolve.genderId"></edit-gender>'
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
                url: '/horse/edit/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<edit horse-id="$resolve.horseId"></edit>'
            },
            {
                name: 'deleteHorse',
                url: '/horse/delete/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<delete-horse horse-id="$resolve.horseId"></delete-horse>'
            },
            {
                name: 'create',
                url: '/horse/create',
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
                name: 'rating',
                url: '/horse/rating/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<last-rating horse-id="$resolve.horseId"></last-rating>'
            },
            {
                name: 'rateHorse',
                url: '/rating',
                template: '<create-rating></create-rating>'
            },
            {
                name: 'manage',
                url: '/manage/{horseId}',
                resolve: {
                    horseId: function ($stateParams) {
                        return $stateParams.horseId;
                    }
                },
                template: '<manage></manage>'

                
            }

        ];

        //$locationProvider.html5Mode(true);

        states.forEach(function (state) {
            $stateProvider.state(state);
        });

    });
    

})();