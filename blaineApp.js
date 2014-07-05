var myApp = angular.module('myApp', []);

myApp.controller('photoCtrl', function($scope){
	$scope.photos =[
		{photo: 'mom.JPG'},
		{photo: 'boys.JPG'},
		{photo: 'greg.JPG'},
		{photo: 'lakes.JPG'},
		{photo: 'tyler.JPG'},
		{photo: 'paris.JPG'},
		{photo: 'sibs.JPG'},
		{photo: 'dad.JPG'}
	]
});
