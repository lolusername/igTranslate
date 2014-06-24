'use strict';

angular.module('igTranslateApp')
  .controller('MainCtrl', function ($scope, $http, $q) {
	$scope.sentence = '';
	$scope.count = 0;
	var myTimeOut;
 	$scope.parseSentence = function(sentence) {



 		var delay = function() {
 			return (Math.random()*10)+5000;
 		};

 		var getIgs = function() {
 			$scope.count++;
 			console.log($scope.count)
 			var strArray = sentence.split(' ');

 			var promiseArray = strArray.map(function(word) {
				return $http.jsonp('https://api.instagram.com/v1/tags/'+word+'/media/recent?callback=JSON_CALLBACK&client_id=ac26545b432f4a8b86e357f7cfb29332&count=1')
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
 		// getIgs(); seeing what tthis does i need to stop the previous
 		//parseSentence queires!?!?
 		clearTimeout(myTimeOut);
 		
 		 getIgs();


 	}
});

