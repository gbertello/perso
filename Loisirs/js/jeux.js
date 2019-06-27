var app = angular.module('jeux', [ ]);
app.controller('jeuxController', ['$scope', '$sce', function($scope, $sce) {

	this.games = [{
		title: "Koryo",
		logo: "img/jeux/koryo.jpg",
		players: "2-4",
		time: "15mn",
		rating: 4
	},
	{
		title: "The Island",
		logo: "img/jeux/theisland.jpg",
		players: "2-4",
		time: "45mn",
		rating: 5
	},
	{
		title: "Money Drop",
		logo: "img/jeux/moneydrop.jpg",
		players: "2-4",
		time: "30mn",
		rating: 4
	},
	{
		title: "Takenoko",
		logo: "img/jeux/takenoko.jpg",
		players: "2-4",
		time: "45mn",
		rating: 5
	},
	{
		title: "San Juan",
		logo: "img/jeux/sanjuan.jpg",
		players: "2-4",
		time: "45mn",
		rating: 5
	},
	{
		title: "Camelot",
		logo: "img/jeux/camelot.jpg",
		players: "2-5",
		time: "45mn",
		rating: 3
	},
	{
		title: "Buzz (PS3)",
		logo: "img/jeux/buzz.jpg",
		players: "1-4",
		time: "45mn",
		rating: 5
	},
	{
		title: "Singstar (PS3)",
		logo: "img/jeux/singstar.jpg",
		players: "1-2",
		time: "30mn",
		rating: 4
	},
	{
		title: "Qui veut gagner des millions (Wii)",
		logo: "img/jeux/quiveutgagnerdesmillions.jpg",
		players: "1-2",
		time: "30mn",
		rating: 4
	},
	{
		title: "Mille Bornes",
		logo: "img/jeux/millebornes.jpg",
		players: "2-4",
		time: "15mn",
		rating: 5
	},
	{
		title: "Contree",
		logo: "img/jeux/contree.jpg",
		players: "4",
		time: "60mn",
		rating: 5
	},
	{
		title: "Uno",
		logo: "img/jeux/uno.jpg",
		players: "2-8",
		time: "15mn",
		rating: 4
	}];
	
	this.ratings = {};
	for (var i in this.games) {
	  if (this.games[i].rating in this.ratings) {
	    this.ratings[this.games[i].rating]++;
	  } else {
	    this.ratings[this.games[i].rating] = 1;
	  }
	}
		
	this.setRating = function(rating) {
	  this.rating = rating;
	}
	this.setRating('');
	
}]);