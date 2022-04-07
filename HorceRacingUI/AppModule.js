var app = angular.module("horseApp", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider.when('/horseRacing',
            {
                templateUrl: 'templates/horse-racing-app-component.html',
                controller: 'Controllers/horseController'
            });
    });

        //app.controller("horseController", function ($scope, $http) {

        //    $scope.title = "Hellooo";
        //    $scope.horses = [];
        //    $http.get("https://localhost:44366/api/Horse").then(function (result) {
        //        console.log(result);
        //        //lower camel
        //        $scope.horses = result.data;
        //    });



        //});

 /*   });*/
   
