angular
	.module('Test')
	.factory('ItemFactory', ItemFactory )

ItemFactory.$inject = ['$http'];

function ItemFactory ( $http ){

	var vm = this;

	vm.getData  = function()
	{
		$http.get('../web/js/data.json').success(function (data) {
	        localStorage.setItem('item',JSON.stringify(data))
	    });
    }

    vm.getItems = function()
    {
    	if(window.localStorage){
    		vm.items =  localStorage.getItem("item");

            return vm.items;
    	}
    }

    vm.saveData	= function(data)
    {
    	if(window.localStorage){
    		vm.items =  localStorage.setItem("item", JSON.stringify(data));

            return vm.items;
    	}
    }
    return vm.factory = {
    	getData  : vm.getData,
    	getItems : vm.getItems,
    	saveData : vm.saveData
    }	

}

