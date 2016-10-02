angular
	.module('Test')
	.factory('ItemFactory', ItemFactory )

ItemFactory.$inject = ['$http'];

function ItemFactory (  $http ){

	var vm = this;

	vm.getData = function(){
		return $http.get('../web/js/data.json').success(function (data) {
	        //Convert data to array.
	        //datos lo tenemos disponible en la vista gracias a $scope
	        vm.datos = data;
	    });
    }

    return vm.factory = {
    	getData : vm.getData
    }	

}

