var isHtml5Compatible = document.createElement('canvas').getContext != undefined;  

if (isHtml5Compatible) {  
    initiateLocalStorage();  

}  

function initiateLocalStorage() {  
    // Create the AngularJS app   
    var app = angular.module('test', ['storageService']);  

    // Create the Controller  
    app.controller('Items', ['$scope', 'getLocalStorage', function ($scope, getLocalStorage, $http) {  

		//$http.get('../web/js/data.json').success(function (data) {
		   //enviamos los datos a la vista con el objeto $scope
		   //$scope.datos = data;
		//});
		

        //Read the Employee List from LocalStorage  
        $scope.employees = getLocalStorage.getItems();  

        //Count the Employee List  
        $scope.count = $scope.employees.length;  


        //Add Employee - using AngularJS push to add Employee in the Employee Object  
        //Call Update Employee to update the locally stored Employee List  
        //Reset the AngularJS Employee scope  
        //Update the Count  
        $scope.addEmployee = function () {  
            $scope.employees.push({ 'descripcion': $scope.descripcion, 'actividad': $scope.actividad, 'encargado': $scope.encargado, 'estatus': $scope.estatus  });  
            getLocalStorage.updateEmployees($scope.employees);  
            $scope.empno = '';  
            $scope.empname = '';  
            $scope.empsalary = '';  
            $scope.count = $scope.employees.length;  
        };  

        //Delete Employee - Using AngularJS splice to remove the emp row from the Employee list  
        //All the Update Employee to update the locally stored Employee List  
        //Update the Count  
        $scope.deleteEmployee = function (emp) {  
            $scope.employees.splice($scope.employees.indexOf(emp), 1);  
            getLocalStorage.updateEmployees($scope.employees);  
            $scope.count = $scope.employees.length;  
        };  
    }]);  

    //Create the Storage Service Module  
    //Create getLocalStorage service to access UpdateEmployees and getItems method  
    var storageService = angular.module('storageService', []);  
    storageService.factory('getLocalStorage', function ($http) {  
        var employeeList = {};  
        return {  
            list: employeeList,  
            updateEmployees: function (EmployeesArr) {  
                if (window.localStorage && EmployeesArr) {  
                    //Local Storage to add Data  
                    localStorage.setItem("employees", angular.toJson(EmployeesArr));  
                }  
                employeeList = EmployeesArr;  

            },  
            getItems: function () {  
                //Get data from Local Storage  
                employeeList = angular.fromJson(localStorage.getItem("employees"));  
                return employeeList ? employeeList : [];  
            }  
             
        };  

    });  
}  
