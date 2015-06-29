var app = angular.module('app', []);

app.service('articles', ['$http', function ($http) {
	this.getArticles = function(){
		return $http.get('http://localhost:3000/posts')
	}

	//this.deleteArticle = function...

	//this.updateArticle = function...

	//this.createArticle = function...
}])

app.controller('myCtrl', ['$scope', 'articles', function ($scope, articles) {
	articles.getArticles().success(function(data){
		$scope.articles = data;
	});

	$scope.updatedArticle = {};

	$scope.newArticle = {};

	$scope.delete = function(id){

	};

	$scope.update = function(id){

		$scope.updateArticle = {};
	}

	$scope.create = function(){

		$scope.newArticle = {};
	}
}])
