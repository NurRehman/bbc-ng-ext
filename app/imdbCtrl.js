'use strict';

angular.module('app').controller('imdbCtrl', function ($scope) {

    //$scope.omdb = omdb;

    /*$scope.$watch('todoStorage.data', function() {
        $scope.todoList = $scope.todoStorage.data;
    });*/
    //$scope.movieData = '';
    
    $scope.searchOmdb = function() {
        console.log($scope);
        var params = {
            title: $scope.newContent, //movie/series/episode name
            type: $scope.content.type
        }

        window.omdb.get(params, function(err, data) {
            var thePoster = data.Poster;
            data.Poster = thePoster.replace('300.jpg', '100.jpg');
            $scope.contentdata = data;
            $scope.$apply();
        });
    }


});