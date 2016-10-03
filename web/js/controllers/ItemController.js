angular
    .module('Test')
    .controller('ItemController', ItemController)
    //.directive('ItemsComponent', ItemsComponent)

ItemController.$inject = [ 'ItemFactory' ];

function ItemController( ItemFactory ){
    
    var vm = this;
    
    vm.itemsInit   = JSON.parse(ItemFactory.getItems());
    
    if(vm.itemsInit == null){
        vm.dataJson = ItemFactory.getData();
    }

    vm.addItem  = function(data)
    {
        vm.items.push({
                'descripcion'   : data.descripcion, 
                'actividad'     : data.actividad, 
                'encargado'     : data.encargado, 
                'estatus'       : data.estatus 
            })
        ItemFactory.saveData(vm.items);

    } 

    vm.deleteItem = function ( item ) {  
        vm.items.splice(vm.items.indexOf(item), 1);  
        ItemFactory.saveData(vm.items);
    }

    vm.items    = JSON.parse(ItemFactory.getItems());

}