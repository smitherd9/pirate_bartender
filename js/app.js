// jQuery extension to handle css animations

    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });



var PirateQuestions = function(questions, flavor) {
	this.questions = questions;
	this.flavor = flavor;
	
};


var PirateIngredients = function(ingredients, amounts) {
	this.ingredients = ingredients;
	this.amounts;
	// this.strong = strong;
	// this.salty = salty;
	// this.bitter = bitter;
	// this.sweet = sweet;
	// this.fruity = fruity;
};


// var PirateFlavors = function(strong, salty, bitter, sweet, fruity) {
// 	this.strong = strong;
// 	this.salty = salty;
// 	this.bitter = bitter;
// 	this.sweet = sweet;
// 	this.fruity = fruity;
// };


var PiratePantry = function(pantry) {
	this.pantry = pantry;
}


var PirateBartender = function(questions){
	this.questions = questions;
	this.userPreference = [];
}



PirateQuestions.prototype.display = function() {
	// $('.pirate-questions').text('');
	// $('.pirate-questions').typed({
 //         strings: [questions],
 //        typeSpeed: 0
 //       });
 	$('.pirate-questions').text(' ');
    $('.pirate-questions').animateCss('zoomIn');
    $('.pirate-questions').append('<h2>' + this.questions + '</h2>');

};

// store random number and use same random number in splice()
// make var for holding random num 

PirateBartender.prototype.submit = function(e) {
	e.preventDefault();
	var input = $('input[name=preferences]').val();
	console.log(input);
	if (input == 'yes') {
    this.userPreference.push(this.currentQuestion.flavor);
    console.log(this.userPreference + " pushed");
	}
	else if ((input !== 'yes') && (input !== 'no')) {
		alert('Just tell me yes er no ya lilly!')
	}
	else {
    this.checkQuestions();
	}
	this.checkQuestions();
};

PirateBartender.prototype.checkQuestions = function() {
	if (this.questions.length == 0){
    	// make drink
    }
    else {
    	var randomNum = Math.floor(Math.random() * questions.length);
    	this.currentQuestion = this.questions[randomNum];
    	this.questions.splice(randomNum, 1);
    	this.currentQuestion.display();
    }
};


// PirateBartender.prototype.ask = function() {
// 	var randomNum = Math.floor(Math.random() * questions.length);
// 	this.currentQuestion = this.questions[randomNum];
// 	this.questions.splice(randomNum, 1);
// 	this.currentQuestion.display();
// 	askedQuestions.push(this.currentQuestion);
// 	console.log(askedQuestions);

// };



var questions = [
	new PirateQuestions('Do ye like yer drinks strong?', 'strong'),
	new PirateQuestions('Do ye like it with a salty tang?', 'salty'),
	new PirateQuestions('Are ye a lubber who likes it bitter?', 'bitter'),
	new PirateQuestions('Would ye like a bit of sweetness with yer poison?', 'sweet'),
	new PirateQuestions('Are ye one for a fruity finish?', 'fruity')

];


// var ingredients = [
// 	new PirateIngredients('')

// ];


// If the user responds 'yes' to a flavor, then choose a random ingredient from that flavor's array

var Ingredients = {
	strong: [
		'Glug of rum', 'Slug of whiskey', 'Splash of gin'
	],

	salty: [
		'Olive on a stick', 'Salt-dusted rim', 'Rasher of bacon'
	],

	bitter: [
		'Shake of bitters', 'Splash of tonic', 'Twist of lemon peel'
	],

	sweet: [
		'Sugar cube', 'Spoonful of honey', 'Splash of cola'
	],

	fruity: [
		'Slice of orange', 'Dash of cassis', 'Cherry on top'
	]

};



var askedQuestions = [];
var pirate = new PirateBartender(questions);








$(document).ready(function(){

$('.entrance').show();
$('.inside').hide();


$('.enter-button').click(function(){
	$('.entrance').animateCss('slideOutUp');	
	$('.inside').animateCss('fadeIn');
	$('.inside').show();	
	
});

$('.enter-button').click(pirate.checkQuestions.bind(pirate));



// $('.pirate-questions').typed({
//         strings: [questions[Math.floor(Math.random() * questions.length)]],
//         typeSpeed: 0
//       });


 $('.response').submit(pirate.submit.bind(pirate));



});