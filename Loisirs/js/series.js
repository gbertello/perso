var app = angular.module('series', [ ]);
app.controller('seriesController', ['$scope', '$sce', function($scope, $sce) {

	this.shows = [{
        title: "Arrow",
        logo: "img/series/arrow.jpg",
        seasons: "1",
        comment: "L'histoire d'un homme qui vivait seul sur une ile deserte pendant 5 ans, et qui revient dans le monde civilise avec l'âme d'un justicier",
        rating: 5
    },
    {
        title: "Suits",
        logo: "img/series/suits.jpg",
        seasons: "1-3",
        comment: "Deux avocats tonitruands et droles !",
        rating: 5
    },
    {
		title: "Devious Maids",
		logo: "img/series/deviousmaids.jpg",
		seasons: "1-2",
		comment: "Une comédie américaine inspirée de Desperate Housewives, très prenante et pleine de rebondissements. Un bon moment à passer.",
		rating: 5
	},
	{
		title: "Game of Throne",
		logo: "img/series/gameofthrone.jpg",
		seasons: "1-4",
		rating: 4
	},
	{
		title: "Homeland",
		logo: "img/series/homeland.jpg",
		seasons: "1-3",
		rating: 4
	},
	{
		title: "How I Met Your Mother",
		logo: "img/series/howimetyourmother.jpg",
		seasons: "1-6",
		rating: 5
	},
	{
		title: "Chuck",
		logo: "img/series/chuck.jpg",
		seasons: "1-2",
		rating: 5
	},
	{
		title: "Dexter",
		logo: "img/series/dexter.jpg",
		seasons: "1",
		rating: 4
	},
	{
		title: "Sex and the City",
		logo: "img/series/sexandthecity.jpg",
		seasons: "1-2",
		rating: 3
	},
	{
		title: "Under The Dome",
		logo: "img/series/underthedome.jpg",
		seasons: "1",
		rating: 3
	},
	{
		title: "Falling Skies",
		logo: "img/series/fallingskies.jpg",
		seasons: "1-2",
		rating: 3
	},
	{
		title: "The Wire",
		logo: "img/series/thewire.jpg",
		seasons: "1-3",
		rating: 5
	},
	{
		title: "The Shield",
		logo: "img/series/theshield.jpg",
		seasons: "1-2",
		rating: 4
	},
	{
		title: "Grey's Anatomy",
		logo: "img/series/greysanatomy.jpg",
		seasons: "1-3",
		rating: 3
	},
	{
		title: "Braquo",
		logo: "img/series/braquo.jpg",
		seasons: "1-2",
		rating: 2
	},
	{
		title: "Heroes",
		logo: "img/series/heroes.jpg",
		seasons: "1-2",
		rating: 2
	},
	{
		title: "Desperate Housewives",
		logo: "img/series/desperatehousewives.jpg",
		seasons: "1-6",
		rating: 5
	},
	{
		title: "24",
		logo: "img/series/24.jpg",
		seasons: "1-8",
		rating: 5
	},
	{
		title: "Lost",
		logo: "img/series/lost.jpg",
		seasons: "1-2",
		rating: 1
	},
	{
		title: "Friends",
		logo: "img/series/friends.jpg",
		seasons: "1-10",
		rating: 5
	}];
	
	this.ratings = {};
	for (var i in this.shows) {
	  if (this.shows[i].rating in this.ratings) {
	    this.ratings[this.shows[i].rating]++;
	  } else {
	    this.ratings[this.shows[i].rating] = 1;
	  }
	}
		
	this.setRating = function(rating) {
	  this.rating = rating;
	}
	this.setRating('');
	
}]);
