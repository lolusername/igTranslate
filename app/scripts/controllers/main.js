'use strict';

angular.module('igTranslateApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.tag = '';
  	$scope.refresh = function(){$http.jsonp('https://api.instagram.com/v1/tags/'+$scope.tag+'/media/recent?callback=JSON_CALLBACK&client_id=5616df9edae94bdbaf03d2fa5216d17b&count=1')
  		.then(function (response) {
  			console.log(response);
            $scope.pics = response;
            // $scope.picsUrl = [];

            // for(var i in $scope.pics.data.data.images) {
            // 	$scope.picsUrl.push('lol');
            // };
        })
  	}
});

//   .controller('MainCtrl', function ($scope, $http, $resource) {
//   $http.jsonp('https://api.instagram.com/v1/tags/selfie/media/recent?callback=JSON_CALLBACK?&amp;client_id=5616df9edae94bdbaf03d2fa5216d17b')
//   		.success(function (r) {
//             console.log('yay')
//         })
//         .error(function (e) {
//           console.log('noo')
//         });
// });


// .controller("MainCtrl",['$scope','$http','$window',function($scope,$http, $window){  
  
//   $http.get('https://api.instagram.com/v1/tags/pokemon/media/recent?callback=JSON_CALLBACK?&amp;client_id=5616df9edae94bdbaf03d2fa5216d17b').then(function(data){

//     $scope.pics=data.data;
//     console.log($scope.pics);

// 	});
// }]);
//   .controller('MainCtrl', function ($scope, $http, $resource) {
//   	// tag = swag;
// 	var data = $resource('https://api.instagram.com/v1/tags/selfie/media/recent?callback=JSON_CALLBACK&client_id=5616df9edae94bdbaf03d2fa5216d17b', {tag: "@tag"});
// 	$scope.pics = data.query({tag: 'swag'});
// });
