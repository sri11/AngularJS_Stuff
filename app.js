var myApp = angular.module('myApp', ['ngRoute']);

myApp.controller("parentController",['$scope',function($scope){
    this.txt= 'Parent : Just started';
    $scope.check = function(){
        console.log($scope.txt);
    }
}]);


myApp.controller("childController",['$scope',function($scope){
    this.txt= 'Child : Just started';
    $scope.check = function(){
        console.log($scope.txt);
    }
}]);

/*ManuallyManual Initialization
If you need to have more control over the initialization process, you can use a manual bootstrapping method instead. Examples of when you'd need to do this include using script loaders or the need to perform an operation before AngularJS compiles a page.
//Note: You should not use the ng-app directive when manually bootstrapping your app.
angular.element(function() {
      angular.bootstrap(document, ['myApp']);
    });
*/

