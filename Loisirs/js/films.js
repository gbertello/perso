var app = angular.module('films', [ ]);
app.controller('filmsController', ['$scope', '$sce', function($scope, $sce) {

	this.movies = [{
		title: "Casino Royale",
		logo: "img/films/casinoroyale.jpg",
		theme: "Action",
		rating: 4
	},
	{
		title: "Quantum of Solace",
		logo: "img/films/quantumofsolace.jpg",
		theme: "Action",
		rating: 4
	},
	{
		title: "16 Blocs",
		logo: "img/films/16blocs.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "L'odyssée de Pi",
		logo: "img/films/lodysseedepi.jpg",
		theme: "Drame",
		rating: 5
	},
	{
		title: "Avatar",
		logo: "img/films/avatar.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "20 ans d'écart",
		logo: "img/films/20ansdecart.jpg",
		theme: "Comédie",
		rating: 4
	},
	{
		title: "Awake",
		logo: "img/films/awake.jpg",
		theme: "Action",
		rating: 4
	},
	{
		title: "Lord of War",
		logo: "img/films/lordofwar.jpg",
		theme: "Action",
		rating: 4
	},
	{
		title: "Cleaner",
		logo: "img/films/cleaner.jpg",
		theme: "Action",
		rating: 3
	},
	{
		title: "Largo Winch",
		logo: "img/films/largowinch.jpg",
		theme: "Action",
		rating: 3
	},
	{
		title: "Le Prénom",
		logo: "img/films/leprenom.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Les Ripoux",
		logo: "img/films/lesripoux.jpg",
		theme: "Comédie",
		rating: 4
	},
	{
		title: "Office Space",
		logo: "img/films/officespace.jpg",
		theme: "Comédie",
		rating: 4
	},
	{
		title: "Slumdog Millionaire",
		logo: "img/films/slumdogmillionaire.jpg",
		theme: "Drame",
		rating: 4
	},
	{
		title: "The Island",
		logo: "img/films/theisland.jpg",
		theme: "Drame",
		rating: 3
	},
	{
		title: "Chaos",
		logo: "img/films/chaos.jpg",
		theme: "Drame",
		rating: 4
	},
	{
		title: "I am Legend",
		logo: "img/films/iamlegend.jpg",
		theme: "Action",
		rating: 4
	},
	{
		title: "La Rançon",
		logo: "img/films/larancon.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "Le négociateur",
		logo: "img/films/lenegociateur.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "Gladiator",
		logo: "img/films/gladiator.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "Taken",
		logo: "img/films/taken.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "Usual Suspects",
		logo: "img/films/usualsuspects.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "Men in Black",
		logo: "img/films/meninblack.jpg",
		theme: "Action",
		rating: 4
	},
	{
		title: "La chèvre",
		logo: "img/films/lachevre.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Le Pari",
		logo: "img/films/lepari.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Les 3 Frères",
		logo: "img/films/les3freres.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Les fugitifs",
		logo: "img/films/lesfugitifs.jpg",
		theme: "Comédie",
		rating: 4
	},
	{
		title: "La vérité si je mens",
		logo: "img/films/laveritesijemens.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Inspecteur la Bavure",
		logo: "img/films/inspecteurlabavure.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Le diner de cons",
		logo: "img/films/ledinerdecons.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Le père noel est une ordure",
		logo: "img/films/leperenoelestuneordure.jpg",
		theme: "Comédie",
		rating: 5
	},
	{
		title: "Retour vers le futur",
		logo: "img/films/retourverslefutur.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "Retour vers le futur 2",
		logo: "img/films/retourverslefutur2.jpg",
		theme: "Action",
		rating: 5
	},
	{
		title: "Retour vers le futur 3",
		logo: "img/films/retourverslefutur3.jpg",
		theme: "Action",
		rating: 5
	}];
	
	this.themes = {};
	for (var i in this.movies) {
	  if (this.movies[i].theme in this.themes) {
	    this.themes[this.movies[i].theme]++;
	  } else {
	    this.themes[this.movies[i].theme] = 1;
	  }
	}
		
	this.setTheme = function(theme) {
	  this.theme = theme;
	}
	this.setTheme('');
	
	this.ratings = {};
	for (var i in this.movies) {
	  if (this.movies[i].rating in this.ratings) {
	    this.ratings[this.movies[i].rating]++;
	  } else {
	    this.ratings[this.movies[i].rating] = 1;
	  }
	}
		
	this.setRating = function(rating) {
	  this.rating = rating;
	}
	this.setRating('');
	
	
}]);