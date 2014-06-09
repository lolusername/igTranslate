'use strict';

angular.module('igTranslateApp', ['ngResource'])
  .factory(function () {
    function($resource){
    return $resource('https://api.instagram.com/v1/tags/selfie/media/recent?callback=?&amp;client_id=5616df9edae94bdbaf03d2fa5216d17b', {}, {
      query: {method:'GET'}, isArray:true}
    });
});