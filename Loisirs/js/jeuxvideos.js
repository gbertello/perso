var app = angular.module('jeuxvideos', [ ]);
app.controller('jeuxvideosController', ['$scope', '$sce', function($scope, $sce) {

	this.videogames = [{
		title: "New Super Mario Bros U",
		logo: "img/jeuxvideos/newsupermariobrosu.jpg",
		description: "Un bon petit mario comme on les aime, en 2D. Plein de bons moments en perspective. Le mode 2 joueurs en coopération \
		    avec un 2e joueur sur le gamepad est assez exceptionnel, en exploitant complètement les possibilités de la Wii U.",
		console: "Wii U",
		rating: 5
	},
	{
		title: "Child of Light",
		logo: "img/jeuxvideos/childoflight.jpg",
		description: "Un RPG comme je n'y ai pas joué depuis bien longtemps. Pour la PS Vita qui plus est. \
		Une bonne technique de combat au tour par tour, une histoire bien ficelée et une dynamique qui nous met bien dedans. A jouer sans hésiter.",
		console: "PS Vita",
		rating: 5
	},
	{
		title: "Mario 3D World",
		logo: "img/jeuxvideos/mario3dworld.jpg",
		console: "Wii U",
		rating: 5
	},
	{
		title: "Gravity Rush",
		logo: "img/jeuxvideos/gravityrush.jpg",
		console: "PS Vita",
		rating: 5
	},
	{
		title: "Diablo III",
		logo: "img/jeuxvideos/diablo3.jpg",
		console: "PS3",
		rating: 5
	},
	{
		title: "Rayman Origins",
		logo: "img/jeuxvideos/raymanorigins.jpg",
		console: "PS Vita",
		rating: 4
	},
	{
		title: "Monster Hunter 3",
		logo: "img/jeuxvideos/monsterhunter3.jpg",
		console: "Wii U",
		rating: 3
	},
	{
		title: "The Last of Us",
		logo: "img/jeuxvideos/lastofus.jpg",
		console: "PS3",
		rating: 5
	},
	{
		title: "Clash of Clans",
		logo: "img/jeuxvideos/clashofclans.jpg",
		console: "iOS",
		rating: 5
	},
	{
		title: "Disgaea 3",
		logo: "img/jeuxvideos/disgaea3.jpg",
		console: "PS Vita",
		rating: 4
	},
	{
		title: "Assassins' Creed III Liberation",
		logo: "img/jeuxvideos/assassinscreed3.jpg",
		console: "PS Vita",
		rating: 4
	},
	{
		title: "Call Of Duty: Black Ops - Declassified",
		logo: "img/jeuxvideos/callofdutyblackops.jpg",
		console: "PS Vita",
		rating: 4
	},
	{
		title: "Little Big Planet",
		logo: "img/jeuxvideos/littlebigplanet.jpg",
		console: "PS Vita",
		rating: 3
	},
	{
		title: "Uncharted",
		logo: "img/jeuxvideos/uncharted.jpg",
		console: "PS Vita",
		rating: 5
	},
	{
		title: "Uncharted 3",
		logo: "img/jeuxvideos/uncharted3.jpg",
		console: "PS3",
		rating: 5
	},
	{
		title: "Xenoblade Chronicles",
		logo: "img/jeuxvideos/xenobladechronicles.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Zelda Skyward Sword",
		logo: "img/jeuxvideos/zeldaskywardsword.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Rage",
		logo: "img/jeuxvideos/rage.jpg",
		console: "PS3",
		rating: 4
	},
	{
		title: "Metroid Other M",
		logo: "img/jeuxvideos/metroidotherm.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Super Smash Bros Brawl",
		logo: "img/jeuxvideos/supersmashbrosbrawl.jpg",
		console: "Wii",
		rating: 3
	},
	{
		title: "Metroid Prime Trilogy",
		logo: "img/jeuxvideos/metroidprimetrilogy.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Gran Turismo 5",
		logo: "img/jeuxvideos/granturismo5.jpg",
		console: "PS3",
		rating: 3
	},
	{
		title: "Donkey Kong Country Returns",
		logo: "img/jeuxvideos/donkeykongcountryreturns.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Mystery Case - L'affaire Malgrave",
		logo: "img/jeuxvideos/mysterycase.jpg",
		console: "Wii",
		rating: 2
	},
	{
		title: "Super Mario Galaxy 2",
		logo: "img/jeuxvideos/supermariogalaxy2.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Uncharted 2",
		logo: "img/jeuxvideos/uncharted2.jpg",
		console: "PS3",
		rating: 5
	},
	{
		title: "Rayman contre les lapins encore plus crétins",
		logo: "img/jeuxvideos/raymancontreleslapinsencorepluscretins.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Bienvenue chez les Chtis",
		logo: "img/jeuxvideos/bienvenuechezleschtis.jpg",
		console: "Wii",
		rating: 1
	},
	{
		title: "Mario Party 8",
		logo: "img/jeuxvideos/marioparty8.jpg",
		console: "Wii",
		rating: 4
	},
	{
		title: "Mario Kart Wii",
		logo: "img/jeuxvideos/mariokartwii.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "New Super Mario Bros",
		logo: "img/jeuxvideos/newsupermariobros.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Zelda Twilight Princess",
		logo: "img/jeuxvideos/zeldatwilightprincess.jpg",
		console: "Wii",
		rating: 5
	},
	{
		title: "Cérébrale Academy",
		logo: "img/jeuxvideos/cerebraleacademy.jpg",
		console: "Wii",
		rating: 4
	},
	{
		title: "Wii Fit",
		logo: "img/jeuxvideos/wiifit.jpg",
		console: "Wii",
		rating: 2
	},
	{
		title: "Wii Play",
		logo: "img/jeuxvideos/wiiplay.jpg",
		console: "Wii",
		rating: 1
	},
	{
		title: "Wii Sports",
		logo: "img/jeuxvideos/wiisports.jpg",
		console: "Wii",
		rating: 4
	}];
	
	this.consoles = {};
	for (var i in this.videogames) {
	  if (this.videogames[i].console in this.consoles) {
	    this.consoles[this.videogames[i].console]++;
	  } else {
	    this.consoles[this.videogames[i].console] = 1;
	  }
	}
		
	this.setConsole = function(console) {
	  this.console = console;
	}
	this.setConsole('');
	
	this.ratings = {};
	for (var i in this.videogames) {
	  if (this.videogames[i].rating in this.ratings) {
	    this.ratings[this.videogames[i].rating]++;
	  } else {
	    this.ratings[this.videogames[i].rating] = 1;
	  }
	}
		
	this.setRating = function(rating) {
	  this.rating = rating;
	}
	this.setRating('');
	
}]);