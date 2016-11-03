var Twit = require ('twit');

var fs = require ('fs'),
    path = require ('path'),
    Twit = require ('twit'),
    config = require ('./config');

var T = new Twit (config);

var tweet;
var imgFile;

prepareTweet();

function prepareTweet() {
	
	var determine = Math.round( Math.random() * 31 );
	var preTweet;
	var talkingPoint;
	var news = false;
	
	
	//declare subjects
	
	var animals = ['albatross','anteater', 'baboon', 'japanese macaque', 'rockhopper-penguin', 'wild-boar', 'wombat', 'zebra',
			'emu', 'donkey', 'elephant', 'water-buffalo', 'parrot'];
	var careers = ['quantity-surveyor','estate-agent', 'accountant', 'cognitive-psychologist', 'investment-banker', 'tree-surgeon',
		       'swimming-instructor', 'nuclear-physicist', 'farmer', 'dentist', 'traffic-warden', 'bus-driver', 
		       'security-guard'];
	var foods = ["basmati-rice","$mango", "$sausage", "angel-delight", "$burger", "$pickled-walnut", "quinoa", "rump-steak",
		     "venison", "chicken-chow-mein", "$scotch-egg", "spam", "$ploughman's-lunch", "duck-confit", "$fondant-potato"];
	var objects = ['potato-peeler','cheese-grater', 'toaster', 'toast-rack', 'Dyson-Airblade-hand-drier', 'hedge-trimmer',
		       'laundry-basket', 'novelty-mug', 'plant-pot', 'deckchair', 'digital-tyre-pump', 'sink plunger', 'sledgehammer'];
	var people = ['Dame-Judi-Dench','Chris-Eubank', 'Jeremy-Vine', 'Eamonn-Holmes', 'The-Notorious-B.I.G.', 'Huw-Edwards',
		      'The-Bishop-of-Oxford', 'Theresa-May', 'Piers-Morgan', 'Professor-Brian-Cox', 'Mary-Berry', 'Simon-Cowell'];
	var places = ['art-gallery','canoeing-centre', 'garden-centre', 'family-planning-clinic', 'robotics-research-facility',
		      'juvenile-detention-centre', 'kitchen-showroom', 'youth-hostel', 'zoological-gardens', 'swimming-baths'];
	var towns = ["Abbots-Langley","Great-Offley", "St-Albans", "Watford", "Stevenage", "Hemel-Hempstead", "Hertford",
		     "Bragbury-End", "Rickmansworth", "Great-Munden", "Steanstead-Abbotts", "Kings-Langley", "Bishop's-Stortford"];
	var transport = ["bus", "ferry", "light-aircraft", "helicopter", "monorail", "taxi", "train", "tram"];
	
	
	//determine random subject
	
	console.log ('Selecting variables');
	
	var randomAnimal = animals [Math.round (Math.random() * (animals.length-1))];
	var randomCareer = careers [Math.round (Math.random() * (careers.length-1))];
	var randomFood = foods [Math.round (Math.random() * (foods.length-1))];
	var randomObject = objects [Math.round (Math.random() * (objects.length-1))];
	var randomPerson = people[Math.round(Math.random()*(people.length-1))];
	var randomPlace = places [Math.round (Math.random() * (places.length-1))];
	var randomTown = towns [Math.round (Math.random() * (towns.length-1))];
	var randomTransport = transport [Math.round (Math.random() * (transport.length-1))];
	
	
	// Determine tweet structure
	
	console.log ('Determining tweet');
	
	if (determine == 0) {
		var determineRoad = Math.round (Math.random() * 2);
		
		if (determineRoad == 0) {
			var road = 'M';
			var roadNo = Math.round (Math.random() * 25);
		} else if (determineRoad == 1) {
			var road = 'A';
			var roadNo = Math.round (Math.random() * 999);
		} else {
			var road = 'B';
			var roadNo = Math.round (Math.random() * 999) + 1000;
		}
		
		var queueing = Math.round (Math.random() * 20) + 1;
		
		talkingPoint = "TRAFFIC NEWS: There's a wild "+randomAnimal+" loose on the "+road+""+roadNo+". Queues for "+queueing+" miles.";
		imgFile = ''+randomAnimal+'.jpg';
		news = true;
	} else if (determine == 1) {
		talkingPoint = "What have you always wanted to ask a "+randomCareer+"?";
		imgFile = ''+randomCareer+'.jpg';
	} else if (determine == 2) {
		talkingPoint = "Could this man be Britain's worst "+randomCareer+"?";
		imgFile = 'man.jpg';
	} else if (determine == 3) {
		preTweet = "Should you keep "+randomFood+" in the cupboard or the fridge?";
		talkingPoint = preTweet.replace('$', 'a ');
		imgFile = ''+randomFood+'.jpg';
	} else if (determine == 4) {
		preTweet = "Could you be addicted to "+randomFood+"?";
		talkingPoint = preTweet.replace(' $', ' ');
		imgFile = ''+randomFood+'.jpg';
	} else if (determine == 5) {
		talkingPoint = "Is it about time we banned the "+randomObject+"?";
		imgFile = ''+randomObject+'.jpg';
	} else if (determine == 6) {
		preTweet = "Is it about time we banned "+randomFood+"?";
		talkingPoint = preTweet.replace(' $', ' the ');
		imgFile = ''+randomFood+'.jpg';
	} else if (determine == 7) {
		talkingPoint = "Could sniffer dogs be trained to detect "+randomObject+"s?";
		imgFile = ''+randomObject+'.jpg';
	} else if (determine == 8) {
		talkingPoint = "Did you discover that your second-hand "+randomObject+" previously belonged to "+randomPerson+"?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 9) {
		talkingPoint = "Have you ever taken a "+randomObject+" on holiday?";
		imgFile = ''+randomObject+'.jpg';
	} else if (determine == 10) {
		talkingPoint = "What have you always wanted to ask "+randomPerson+" about "+randomObject+"?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 11) {
		talkingPoint = "Is it high time "+randomPerson+" headlined Glastonbury?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 12) {
		talkingPoint = "Have you been denied planning permission for a "+randomPlace+"?";
		imgFile = ''+randomPlace+'.jpg';
	} else if (determine == 13) {
		talkingPoint = "Which is your favourite "+randomTransport+" service?";
		imgFile = ''+randomTransport+'.jpg';
	} else if (determine == 14) {
		talkingPoint = "Should there be an independence referendum for "+randomTown+"?";
		imgFile = ''+randomTown+'.jpg';
	} else if (determine == 15) {
		talkingPoint = "Is "+randomPerson+" undermining NATO?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 16) {
		talkingPoint = "On the day "+randomPerson+" launches a new "+randomObject+", have celebrity endorsements gone too far?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 17) {
		talkingPoint = "Have you ever been mistaken for a "+randomCareer+"?";
		imgFile = ''+randomCareer+'.jpg';
	} else if (determine == 18) {
		talkingPoint = "Have you met "+randomPerson+" in disguise at the "+randomTown+" ASDA?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 19) {
		talkingPoint = "Do we REALLY need a third "+randomPlace+" in "+randomTown+"?";
		imgFile = ''+randomPlace+'.jpg';
	} else if (determine == 20) {
		preTweet = "Are Hertfordshire's "+randomPlace+"s becoming too middle class?";
		talkingPoint = preTweet.replace('ys ', 'ies ');
		imgFile = ''+randomPlace+'.jpg';
	} else if (determine == 21) {
		preTweet = "Should the traditional "+randomTown+" "+randomFood+" be afforded protected status?";
		talkingPoint = preTweet.replace(' $', ' ');
		imgFile = ''+randomFood+'.jpg';
	} else if (determine == 22) {
		talkingPoint = "Should "+randomTown+" council be spending public money on a statue of "+randomPerson+"?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 23) {
		talkingPoint = "Could you beat "+randomPerson+" in a fight?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 24) {
		talkingPoint = "Should "+randomTown+" be demolished to make room for a new "+randomPlace+"?";
		imgFile = ''+randomTown+'.jpg';
	} else if (determine == 25) {
		talkingPoint = "Has your local "+randomPlace+" been deemed 'inadequate'?";
		imgFile = ''+randomPlace+'.jpg';
	} else if (determine == 26) {
		talkingPoint = "What do you look for in a great "+randomObject+"?";
		imgFile = ''+randomObject+'.jpg';
	} else if (determine == 27) {
		talkingPoint = "Are you proud of a "+randomTown+" resident, who's been named Britain's laziest "+randomCareer+"?";
		imgFile = 'man.jpg';
	} else if (determine == 28) {
		talkingPoint = "What would happen if a nuclear bomb hit "+randomTown+"?";
		imgFile = ''+randomTown+'.jpg';
	} else if (determine == 29) {
		talkingPoint = "Is "+randomPerson+" the right choice to open the new "+randomTown+" "+randomPlace+"?";
		imgFile = ''+randomPerson+'.jpg';
	} else if (determine == 30) {
		talkingPoint = "ENTERTAINMENT NEWS: "+randomPerson+" has been confirmed for the new series of undercover "+randomCareer+"";
		imgFile = ''+randomPerson+'.jpg';
		news = true;
	} else if (determine == 31) {
		preTweet = "Should "+randomAnimal+"s be banned from "+randomTown+" park?";
		talkingPoint = preTweet.replace('buffalos ', 'buffalo ');
		imgFile = ''+randomAnimal+'.jpg';
	} else if (determine == 32) {
		talkingPoint = "BREAKING: The MP for "+randomTown+" has been appointed government minister for "+randomObject+"s";
		imgFile = 'mp.jpg';
		news = true;
	} else if (determine == 33) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 34) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 35) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 36) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 37) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 38) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 39) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 40) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 41) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 42) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 43) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 44) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 45) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 46) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 47) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 48) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 49) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 50) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 51) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 52) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 53) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 54) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 55) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 56) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 57) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 58) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 59) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 60) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 61) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 62) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 63) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 64) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 65) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 66) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 67) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 68) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 69) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 70) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 71) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 72) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 73) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 74) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 75) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 76) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 77) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 78) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 79) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 80) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 81) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 82) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 83) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 84) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 85) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 86) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 87) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 88) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 89) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 90) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 91) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 92) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 93) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 94) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 95) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 96) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 97) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 98) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 99) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 100) {
		talkingPoint = ""+random+"?";
		imgFile = ''+random+'.jpg';
	} else if (determine == 500) {
		talkingPoint = "Up next: Music from when the first "+randomObject+" was invented in "+randomTown+", but can you guess the year?";
		imgFile = ''+randomObject+'.jpg';
	}
	
	
	// fix grammar
	
	console.log ('Fixing grammar');
	
	var spaces = talkingPoint.replace (/-/gi, ' ');
	var replaceA = spaces.replace (/a a/g, 'an a');
	var replaceE = replaceA.replace (/a e/g, 'an e');
	var replaceI = replaceE.replace (/a i/g, 'an i');
	var replaceO = replaceI.replace (/a o/g, 'an o');
	var subject = replaceO.replace (/a u/g, 'an u');
	
	
	// tweet phrasing
	
	console.log ('Adding phrasing');
	
	var phrasing = Math.round (Math.random() * 8);
	
	if (determine > 500 || phrasing == 0 || news) {
		tweet = subject;
		news = false;
	} else if (phrasing == 1) {
		tweet = "Today's big debate: "+subject+""	
	} else if (phrasing == 2) {
		tweet = "In the next hour: "+subject+""	
	} else if (phrasing == 3) {
		tweet = "Coming up: "+subject+""	
	} else if (phrasing == 4) {
		tweet = "Your call: "+subject+""	
	} else if (phrasing == 5) {
		tweet = "Question of the day: "+subject+""	
	} else if (phrasing == 6) {
		tweet = ""+subject+" We want to hear from you!"	
	} else if (phrasing == 7) {
		tweet = ""+subject+" Call us now!"	
	} else if (phrasing == 8) {
		tweet = ""+subject+" Get in touch!"	
	}
	
	postTweet();
}

function postTweet() {
	if(tweet.length < 141){
		console.log ('Preparing image');
		var image_path = path.join(__dirname, '/images/' + imgFile),
		b64content = fs.readFileSync(image_path, { encoding: 'base64' });
	
		console.log ('Uploading image');
	
		T.post('media/upload', { media_data: b64content }, function (err, data, response) {
    		if (err) {
      			console.log (err);
    		}else{
      			console.log ('Image uploaded');

      			T.post ('statuses/update', {
        		media_ids: new Array (data.media_id_string),
				status: tweet
      			},
        
				function(err, data, response) {
          			if (err) {
            			console.log ('Error!');
            			console.log (err);
          			}else{
            			console.log ('Tweet posted');
						
						// Next tweet
	
						var minInterval = 1000 * 60 * 60 * 2.5;
						var variableInterval = Math.random() * 2;
						var nextTweet = Math.round ((1000 * 60 * 60) * variableInterval + minInterval);

						console.log ('The next tweet will be posted in '+nextTweet+' milliseconds');

						setTimeout(prepareTweet, nextTweet);	
          			}
        		});
    		}
  		});
	} else {
		console.log ('The tweet is too long. Regenerating.');
		prepareTweet();
	}
}// JavaScript Document
