angular
    .module('Test')
    .component('itemComponent', {
		controller	: 	'ItemController',
		controllerAs: 	'items', 
		template   	: 	['<table class="striped">',
				            '<tr>',  
				                '<td><b>Descripcion</b></td>',  
				                '<td><b>Actividad</b></td>',  
				                '<td><b>Encargado</b></td>',  
				                '<td><b>Estatus</b></td>', 
				                '<td><b>Accion</b></td>',  
				            '</tr>',  
				            '<tr ng-repeat="item in items.items">',  
				                '<td>{{ item.descripcion }} </td>',  
				                '<td>{{ item.actividad }} </td>',  
				                '<td>{{ item.encargado }} </td>',  
				                '<td>{{ item.estatus }} </td>',  
				                '<td>',  
				                    '<button ">Delete</button>',
				                '</td>',  
				            '</tr>',  
				        '</table> '].join('')
	});

 
