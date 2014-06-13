'use strict';

angular.module('igTranslateApp')
  .controller('MainCtrl', function ($scope, $http, $q) {
	$scope.sentence = '';
	var myTimeOut;
 	$scope.parseSentence = function(sentence) {
 		var delay = function() {
 			return (Math.random()*10)+5000;
 		};

 		var getIgs = function() {
 			var strArray = sentence.split(' ');

 			var promiseArray = strArray.map(function(word) {
				return $http.jsonp('https://api.instagram.com/v1/tags/'+word+'/media/recent?callback=JSON_CALLBACK&client_id=5616df9edae94bdbaf03d2fa5216d17b&count=1')
 			});
 			
 			$q.all(promiseArray).then(function(arrayOfArrayOfInstagrams) {
 
 				var image_urls = arrayOfArrayOfInstagrams.map(function(response) {
 					myTimeOut = setTimeout(getIgs, delay());
 					return response.data.data[0].images.low_resolution.url;
 				});
 			$scope.images_for_words = image_urls;
 			console.log(image_urls);
 			});
 		};
 		clearTimeout(myTimeOut);
 		getIgs();


 	}
});

