var app = angular.module('livres', [ ]);
app.controller('livresController', ['$scope', '$sce', function($scope, $sce) {

	this.books = [,
,
	,
	,
	,
	,
,
	,
    ,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	,
	];
	
	this.tags = {};
	for (var i in this.books) {
	  for (var j in this.books[i].tags) {
	    if (this.books[i].tags[j] in this.tags) {
	      this.tags[this.books[i].tags[j]]++;
	    } else {
	      this.tags[this.books[i].tags[j]] = 1;
	    }
	  } 
	}
		
	this.setTheme = function(tag) {
	  this.theme = tag;
	}
	this.setTheme('');
	
	this.ratings = {};
	for (var i in this.books) {
	  if (this.books[i].rating in this.ratings) {
	    this.ratings[this.books[i].rating]++;
	  } else {
	    this.ratings[this.books[i].rating] = 1;
	  }
	}
		
	this.setRating = function(rating) {
	  this.rating = rating;
	}
	this.setRating('');

	
}]);
