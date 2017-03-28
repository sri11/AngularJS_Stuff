//console.log($("#h1").attr("ng-replay"));

//var person = "Tony";
//logPerson();

var myApp = angular.module('myApp', ['ngMessages', 'ngResource','ngRoute']);


myApp.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl : 'pages/main.html',
        controller : 'mainController'
    }).when('/second',{
        templateUrl :'pages/second.html',
        controller:'secondController'
    })
    .when('/second:num',{
        templateUrl :'pages/second.html',
        controller:'secondController'
    })
});

myApp.controller('mainController', ['$scope', '$log',function($scope,$log){
    $scope.person = {
       name : 'John Doe',
       address : '555 Main St.',
       city: 'New York',
       state:'NY',
       zip:'11111'
   };
   $scope.people = [{
       name : 'John Doe',
       address : '555 Main St.',
       city: 'New York',
       state:'NY',
       zip:'11111'
   },{
       name : 'Jane Doe',
       address : '333 Second St.',
       city: 'Buffalo',
       state:'NY',
       zip:'22222'
   }, {
       name : 'George Doe',
       address : '111 Third St.',
       city: 'Miami',
       state:'FL',
       zip:'33333'
   }]
   $scope.formattedAddress = function (person){
       return person.address+', '+person.city+', '+person.state+' '+person.zip;
   }   
}]);
                                    
myApp.controller('secondController', ['$scope', '$log','$routeParams',function($scope,$log,$routeParams){
    
}]);

myApp.directive("searchResult",function(){
    return {
        restrict:'AECM' ,//single letter M -ignore comments
        templateUrl:'directives/searchresult.html',
        replace:true,
        scope:{
            personName: "@",
            personAddress: "@",
            personObject:"=",
            formattedAddressFunction:"&"
        },
        transclude:true
        /*link:function(scope,elements,attrs){
            console.log('Post-linking....');
            console.log(scope);
            if(scope.personObject.name=="Jane Doe"){
                elements.removeAttr('class');
            }
            console.log(elements);
        }*/
        /*compile:function(ele,attr){
            console.log('Compiling....');
            //ele.removeAttr('class');
            console.log(ele.html());
            return {*/
                //Avoid Prelink
                /*pre:function(scope,elements,attrs){
                    console.log('Pre-linking....');
                    console.log(elements);
                },*/
               /* post:function(scope,elements,attrs){
                    console.log('Post-linking....');
                    console.log(scope);
                    if(scope.personObject.name=="Jane Doe"){
                        elements.removeAttr('class');
                    }
                    console.log(elements);
                }
            }
        */
    }
});

/*

myApp.service('nameService',function(){
    var self =this;
    this.name = 'John Smith';
    this.namelength = function(){
       return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$log','nameService',function($scope,$log,nameService){
    $scope.name= nameService.name;
    $scope.$watch('name',function(){
        nameService.name = $scope.name;
    });
    $log.log(nameService.name);
    $log.log(nameService.namelength());
}]);
                                    
myApp.controller('secondController', ['$scope', '$log','$routeParams','nameService',function($scope,$log,$routeParams,nameService){
    $scope.num= $routeParams.num || 1;
      $scope.name= nameService.name;
    $scope.$watch('name',function(){
        nameService.name = $scope.name;
    });
    $log.log($scope);
}]);
*/
                                    
/*myApp.controller('mainController', ['$scope', '$timeout','$http', '$log', '$filter', '$resource', function ($scope, $timeout, $http ,$log, $filter, $resource) {
    $scope.name = 'ABHI';
    $scope.handle = '';
    $scope.handle = '';
    $scope.characters = 5;
    $scope.rules = [
        {
            name: 'Must be 5 characters'
        },
        {
            name: 'Must not be used elsewhere'
        },
        {
            name: 'Must be cool'
        }
    ];
    console.log($scope.rules);
    $scope.lowercasehandle = function () {
        return $filter('lowercase')($scope.handle);
    }

    $http.post('http://localhost:8887/api')
        .success(function(result){
        $scope.rules = result;
    })
        .error(function(data,status){
        console.log(data);
    });
    
    $scope.$watch('handle', function (newValue, oldValue) {
        console.log('Changed!');
        console.info("Old:" + oldValue);
        console.debug("New:" + newValue);
    });


  setTimeout(function () {
        $scope.$apply(function () {
            $scope.handle = 'newtwitterhandle..';
            console.log('Scope changed!');
        });
    }, 3000);
    
    OR
    here we dont need $apply() angular take cares of it.
    $timeout(function(){
         $scope.handle = 'newtwitterhandle1';
            console.log('Scope changed!');
    },3000);
    
}]);
myApp.controller('mainController', ['$scope', '$log','$location',function ($scope,$log,$location){ 
     console.log($location.path);
    
}]);
*/






//console.log(angular.injector.annotate(searchPeople));


/*var things = [1, '2', function () {
    alert('HEY!!!')
}];
console.log(things[2]());*/






//myApp.controller('mainController',['$scope','$timeout','$log','$filter','$resource', function($scope,$timeout,$log,$filter,$resource) {
//console.log($scope);
//console.log( $log);
//$log.log("Hello!!");
//$log.info("This is some information.");
//$log.warn("Warning!");
//$log.debug("Some debug information while writting my code.");
//$log.error("This was an error!!!");
//
/* $timeout(function(){
     $scope.name = 'Hey Bro..!!!'+$scope.name;
 },3000);
 */
//$scope.formattedname = $filter('uppercase')($scope.name);
//$log.info($scope.name);
//$log.info($scope.formattedname);


// console.log($resource);
//}]);