
//ROUTES
/*
weatherApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'pages/home.htm',
            controller: 'homeController'
        })
        .when('/forecast',{
            templateUrl: 'pages/forecast.htm',
            controller: 'forcastController'            
        }).when('/forecast/:days',{
            templateUrl: 'pages/forecast.htm',
            controller: 'forcastController'            
        })
});*/


//UI ROUTES - 
weatherApp.config(function($stateProvider,$urlRouterProvider){
     // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("home")
    $stateProvider.state('home',{
        url:'/',
        templateUrl:'pages/home.htm',
        controller:'homeController'
    }).state('forecast',{
        url:'/forecast',
        templateUrl:'pages/forecast.htm',
        controller:'forcastController',
        //params: {'index': null, 'anotherKey': null} // -> For custom parameters need to define params with null values and these will be replace with passed values 'forecast' state.
    }).state('forcastdays',{
        url:'/forecast/:days',
        templateUrl:'pages/forecast.htm',
        controller:'forcastController'
    })
});