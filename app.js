var app = angular.module('app', []);

app.service('articles', ['$http', function ($http) {
	this.getArticles = function(){
		return $http.get('http://localhost:3000/posts')
	}
}])

app.controller('myCtrl', ['$scope', 'articles', function ($scope, articles) {
	articles.getArticles().success(function(data){
		$scope.articles = data;
	})
}])
