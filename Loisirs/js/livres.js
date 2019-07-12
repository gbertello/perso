var app = angular.module('livres', [ ]);
app.controller('livresController', ['$scope', '$sce', function($scope, $sce) {

	this.books = [{
		title: "Le charme discret de l'intestin",
		author: "Giulia Enders",
		logo: "/storage/loisirs/intestin.jpg",
		description: "Un sujet peu commode mais très abordable pour les néophytes en biologie. L'auteur nous transporte vers \
		l'univers de l'infiniment petit en décrivant précisément comment chacun de nous peut héberger tout un écosystème de bactéries \
		dans notre appareil digestif. Surtout, il met en avant un domaine majeur que la science est en train de commencer à explorer: \
		le lien qui peut exister entre ces bactéries et notre santé, ou plus généralement notre alimentation et notre état général. ",
		date: "Juin 2016",
		tags: ["Santé"],
		rating: 4
	},
	{
		title: "Continuous Delivery",
		author: "Jez Humble",
		logo: "/storage/loisirs/continuousdelivery.jpg",
		description: "Pour les experts et passionnés en informatique. Un livre qui donne toutes les recettes pour mieux optimiser \
		la chaîne de production logicielle tout en se préoccupant de toujours garder un certain niveau de qualité et satisfaire au mieux les clients. \
		De nombreux concepts sont décrits en détail comme l'intégration continue, la mécanique de déploiement automatique et l'automatisation des tests unitaires et d'acceptance. \
		A lire de toute urgence pour ceux qui sont du milieu.",
		date: "Août 2015",
		tags: ["Informatique"],
		rating: 5
	},
	{
		title: "L'extraordinaire voyage du fakir... ",
		author: "Romain Puértolas",
		logo: "/storage/loisirs/fakir.jpg",
		description: "Un extraordinaire voyage raconté par un extraordinaire auteur. Un livre plein de péripéties aussi folles les unes que les autres \
		qui se permet en même temps d'illustrer quelques faits marquants de notre société.",
		date: "Août 2015",
		tags: ["Roman"],
		rating: 5
	},
	{
		title: "How Google test software",
		author: "James Whittaker",
		logo: "/storage/loisirs/googletest.jpg",
		description: "Qui n'a jamais rêvé de comprendre comment Google testait leur systèmes ? Du moteur de recherche standard aux applications \
		mondialement connues comme gmail, Chrome ou Android, ce livre nous dévoile comment sont testés et vérifiés les logiciels avant de les diffuser au grand public. \
		Comme toujours quand il s'agit de Google, les méthodes et les outils sont utiles, performants et intelligemment conçus.",
		date: "Février 2015",
		tags: ["Informatique"],
		rating: 5
	},
	{
		title: "Les 12 travaux de l'opposition",
		author: "UMP",
		logo: "/storage/loisirs/les12travauxdelopposition.jpg",
		description: "L'UMP est en train de mourir. Mais elle explique à travers cet ouvrage ce qu'elle compte faire pour survivre. De bonnes idées sont \
		évoquées notamment la refonte de notre démocratie (par Bruno Le Maire) et les innovations mélangeant écologie et numérique (par Nathalie Kosciusko-Morizet). \
		On pourrait regretter que les intervenants ne se soient pas plus concertés avant la publication de cet ouvrage, on a quelque fois l'impression que \
		le dialogue manque (par exemple entre Jean-François Copé et François Fillon comme on pouvait s'y attendre).",
		date: "Octobre 2014",
		tags: ["Politique"],
		rating: 4
	},
	{
		title: "Merci pour ce moment",
		author: "Valérie Trierweiler",
		logo: "/storage/loisirs/mercipourcemoment.jpg",
		description: "Il est peu commun de lire le récit d'une personnalité au plus proche du sommet de l'état.\
		Malgré quelques bonnes anecdotes sur les principaux événements qui ont marqué le début de mandat de François Hollande (l'affaire Cahuzac, \
		Léonarda, le tweet des élections législatives, ...), cette auto-biographie est avant tout un roman d'amour et d'eau fraîche où l'ex-Première Dame justifie\
		les décisions marquantes qu'elle a eu à prendre ses dernières années.",
		date: "Octobre 2014",
		tags: ["Politique"],
		rating: 2
	},
	{
		title: "Combien ?",
		author: "Douglas Kennedy",
		logo: "/storage/loisirs/combien.jpg",
		description: "Un récit sur les places boursières du monde et quelques uns de leurs acteurs piochés au hasard. L'auteur nous fait réfléchir tout au long du \
		    livre sur la véritable place de l'argent dans la société. Comment se fait-il qu'il y ait tant d'inégalités entre les plus pauvres et les plus riches?\
		    Est-ce que les traders sont effectivement plus heureux? En passant par Casablanca, Sydney,\
		    New York, Londres, Singapour ou même Budapest, il nous est expliqué qu'un trader n'est qu'un commerçant tout comme dans un marchand dans un souk.\
		    Sauf que les montants en jeu sont jusqu'à 1 000 000 de fois plus importants.",
		date: "Septembre 2014",
		tags: ["Economie", "Récit"],
		rating: 4
	},
	{
		title: "L'homme libre",
		author: "Jean-Jacques Bourdin",
		logo: "/storage/loisirs/lhommelibre.jpg",
		description: "L'homme que j'écoute tous les matins à la radio se livre a un essai pour se décrire et se défendre des critiques de ses détracteurs. \
   		    Selon lui, un journaliste se doit de rester neutre pour essayer de trouver des réponses concrètes aux questions soulevées par le peuple. Et c'est cette liberté \
            qui lui a permis de réussir ses plus grandes interviews avec par exemple Ségolène Royale qui ne dénombraient qu'un sous-marin nucléaire en France, Nicolas \
            Sarkozy qui annonçait son retrait de la politique ou encore Jérôme Cahuzac qui, les yeux dans les yeux, jurait ne pas tricher avec le fisc. Un livre troublant \
            de vérité qui m'a permis de mieux comprendre ce journaliste atypique.",
		date: "Août 2014",
		tags: ["Politique"],
		rating: 5
	},
    {
		title: "Le dernier théorème de Fermat",
		author: "Simon Singh",
		logo: "/storage/loisirs/fermatslasttheorem.jpg",
		description: "Le théorème de Fermat est l'un des théorèmes les plus incroyables des mathématiques. \
			Il a été publié par Pierre de Fermat au cours du XVIIe siècle sans preuve associée et a finalement été démontré par Andrew Wiles \
			en 1994 en utilisant les techniques mathématiques les plus poussées du XXe siècle. Le plus ahurissant est que Pierre \
			de Fermat lui même prétendait détenir la preuve. Rêve ou réalité ? Ce livre retrace de manière ludique l'histoire de tous les grands mathématiciens \
			ayant essayé de s'attaquer au problème. Un véritable chef d'oeuvre !",
		date: "Août 2014",
		tags: ["Mathématiques"],
		rating: 5
	},
	{
		title: "Confessions d'un compositeur",
		author: "John Cage",
		logo: "/storage/loisirs/confessionscompositeur.jpg",
		description: "Pour des musiciens experts seulement. Un compositeur moderne du XXe siecle explique son chemin parcouru \
			avec la musique. Briser les idées préconçues que lui ont inculquées les professeurs de musique classique traditionnelle \
			a été son plus grand défi, d'où son attrait vers les musiques de percussions. \
			Il termine par expliquer que son lien avec la musique est maintenant dénué de tout intérêt, \
			afin d'arriver à une parfaite osmose avec ses compositions.",
		date: "Juillet 2014",
		tags: ["Musique"],
		rating: 2
	},
	{
		title: "Histoire des Codes Secrets",
		author: "Simon Singh",
		logo: "/storage/loisirs/codes.jpg",
		description: "Un livre fabuleux qui retranscrit comment \
			depuis l'Antiquité les diverses générations ont réussi à coder leurs messages \
			pour certains et à les décoder pour d'autres. Nous y apprenons par exemple \
			comment les alliés ont déjoué les messages allemands durant la deuxième guerre mondiale, \
			et comment la cryptographie actuelle nous assure des transactions commerciales \
			sécurisées sur Internet grâce au système RSA.",
		date: "Juillet 2014",
		tags: ["Informatique", "Mathématiques"],
		rating: 5
	},
	{
		title: "Pour une économie positive !",
		author: "Jacques Attali",
		logo: "/storage/loisirs/economiepositive.jpg",
		description: "Enfin un livre sérieux qui donne espoir. Tout le livre \
		illustre les dérives de la finance actuelle et du \"business\" uniquement porté sur l'optimisation \
            de la rentabilité à court terme. Il donne aussi quelques pistes sérieuses sur les principales \
            réformes qu'il faudrait faire dans notre pays pour mettre le long terme au coeur de toute décisions \
            importante. Tout ceci afin de donner un monde meilleur à nos enfants.",
		date: "Février 2014",
		tags: ["Politique"],
		rating: 5
	},
	{
		title: "Le meilleur médicament, c'est vous !",
		author: "Frédéric Saldmann",
		logo: "/storage/loisirs/medicament.jpg",
		description: "Un nutritionniste explique comment l'auto-médication \
            peut parfois être bien plus utile que des scéances chez le docteur à répétition. \
            Il nous fait part d'une flopée de trucs et astuces qui peuvent simplifier notre quotidien: \
            (gestion du stress, alimentation simple et équilibrée, dynamisme, ...)",
		date: "Novembre 2013",
		tags: ["Santé"],
		rating: 4
	},
	{
		title: "Le Mystère Français",
		author: "Hervé Le Bras, Emmanuel Todd",
		logo: "/storage/loisirs/lemysterefrancais.jpg",
		description: "Ces démographes nous dressent un portrait étonnant de la \
			France avec un jeu de cartes atypiques. Différents critères sont mis en évidence (vieillissement \
            de la population, religion, exode, ...). A lire la tête reposée quand même.",
		date: "Octobre 2013",
		tags: ["Politique"],
		rating: 3
	},
	{
		title: "Comment s'en sortir !",
		author: "Jean-François Kahn",
		logo: "/storage/loisirs/commentsensortir.jpg",
		description: "Un titre alléchant. Un point de vue aux antipodes du mien. \
            Quelques bonnes pensées. Il met par exemple en évidence que la bi-polarité est à l'origine \
            du malaise politique qui existe dans notre pays.",
		date: "Août 2013",
		tags: ["Politique"],
		rating: 2
	},
	{
		title: "Urgences Françaises !",
		author: "Jacques Attali",
		logo: "/storage/loisirs/urgencesfrancaises.jpg",
		description: "Que faire dans notre pays pour le remettre en marche ? \
            C'est la question à laquelle tente de répondre Jacques Attali. Il nous propose \
            une liste de réformes diverses et variées, pour la plupart impopulaires, mais qui \
            permettront selon lui de retrouver le droit chemin. Sa feuille de route comprend des échéances \
            à court, moyen et long terme d'où le titre de son livre.",
		date: "Août 2013",
		tags: ["Politique"],
		rating: 4
	},
	{
		title: "Le Coup Monté !",
		author: "Carole Barjon, Bruno Jeudy",
		logo: "/storage/loisirs/coupmonte.jpg",
		description: "La crise de l'UMP Copé-Fillon de l'automne 2012 n'était pas brillante. \
            Et pourtant le commun des mortels ne voyait que la surface de l'Iceberg. Tricheries, \
            coups bas, calculs, voilà ce qui importe pour les personnes qui se disent un jour prétendre à \
            gouverner le pays. Le livre accuse implicitement Jean-François Copé d'avoir été de mèche avec \
            Nicolas Sarkozy et d'avoir tout orchestré pour lui permettre de revenir un jour. L'avenir \
            nous dira si il se représentera...",
		date: "Août 2013",
		tags: ["Politique"],
		rating: 4
	},
	{
		title: "Qui va payer la crise ?",
		author: "François Langlet",
		logo: "/storage/loisirs/quivapayerlacrise.jpg",
		description: "La crise touche tout le monde... ou presque. Certains \
            rentiers n'en voient même pas la couleur. D'autres, à l'origine du désastre, ne se \
            soucient pas des conséquences de leurs actes. Mais qui reste-t-il donc ? Selon \
            cet économiste, ce seront les classes moyennes qui vont la rembourser, à leur manière...",
		date: "Avril 2013",
		tags: ["Politique"],
		rating: 3
	},
	{
		title: "Les 7 lois pour guider vos enfants vers la voie du succès",
		author: "Deepak Choppa",
		logo: "/storage/loisirs/lesseptlois.jpg",
		description: "Il est rêve de tout parent de vouloir la réussite de ses enfants. \
            Pourtant ce n'est pas chose facile étant donné qu'ils pensent différemment, avec leur innocence \
            liée à leur immaturité. Ce livre présente 7 lois (tout est possible, ce que tu cherches à obtenir donne-le, formalise tes désirs, ...) \
            à réfléchir de manière cyclique comme les jours de la semaine pour élever spirituellement ses enfants.",
		date: "Décembre 2012",
		tags: ["Education"],
		rating: 5
	},
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
