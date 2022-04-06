var app = angular.module("horseApp", []);

app.controller("horseController", function ($scope, $http) {

    $scope.title = "Title";
    //$http({
    //    method: 'GET',
    //    url: 'https://localhost:44366/api/GetAll'
    //}).then(function (result) {
    //    $scope.getHorseRecords = result.data;
    //});

    $http.get("http://localhost:44366/api/Horse")
        .then(function (response) {
            console.log(response.data);

            $scope.getHorseRecords = response.data;


        });

});