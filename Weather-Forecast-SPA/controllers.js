//CONTROLLERS
weatherApp.controller('homeController', ['$scope', '$location', 'cityService','$state', function ($scope, $location, cityService,$state) {
    $scope.city = cityService.city;
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });
    $scope.submit = function () {
       // $location.path("/forecast");
        //with ui-route
        //$state.href("forecast")
        $state.go('forecast',{ 'index': 123, 'anotherKey': 'This is a test' }); // pass the with go -> $state.go('forecast',{obj:'test'});
    }
}]);

//weatherApp.controller('forcastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function ($scope, $routeParams, cityService, weatherService) {

//When you use ui-route shall use the $stateParams instead of $routeParams otherwise giving error.
weatherApp.controller('forcastController', ['$scope', '$stateParams', 'cityService', 'weatherService', function ($scope, $stateParams, cityService, weatherService) {
    $scope.city = cityService.city;
    $scope.days = $stateParams.days || '2';//$routeParams.days || '2';
    $scope.$watch('city', function () {
        cityService.city = $scope.city;
    });

    $scope.weatherResults = weatherService.GetWeather($scope.city, $scope.days);
    $scope.convertToFahrenheit = function (degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };
    $scope.convertToDate = function (dt) {
        return new Date(dt * 1000);
    };
    console.log($scope.weatherResults);
}]);