var app = angular.module('myApp', ['ngRoute']);

//route config

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html'
        }).
        when('/add', {
            templateUrl: 'views/add.html'
        }).
        otherwise({
            redirectTo: '/home'
        });
}]);

app.service('empService', function () {
    this.employees = [
        {
            "id": 1,
            "name": "abcd",
            "sal": 1234
        },
        {
            "id": 2,
            "name": "abcd",
            "sal": 1234
        }, {
            "id": 3,
            "name": "abcd",
            "sal": 1234
        }
    ];
    this.setEmployee = (emp) => {
        this.employees.push({
            "id": this.employees.length + 1,
            "name": emp.name,
            "sal": emp.sal
        });
    }

    this.getEmployees = () => {
        return this.employees;
    }
});

app.directive('navbar', () => {
    return {
        restrict: 'AE',
        replace: 'true',
        template: ' <nav class="nav-header">'+
                        '<ul>'+
                            '<li>' + 
                                '<a href="#/home">Home</a>' + 
                            '</li>' + 
                             '<li>' +
                                '<a href="#/add">Add</a>' +
                             '</li>' + 
                        '</ul>'+
                    '</nav>'
    };
})

app.controller('employeeController', function ($scope, $location, empService) {
    $scope.searchEmployee = "";
    $scope.employees = empService.getEmployees();
    $scope.addEmployee = () => {
        empService.setEmployee($scope.emp);
        $location.path('/home')
    }
});

