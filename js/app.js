// jQuery extension to handle css animations

$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


// Pirate Bar Sounds // 

var tavern = new Audio('sounds/Medieval_tavern.mp3');
var yar = new Audio('sounds/yaargh.wav');
var drivesMe = new Audio('sounds/drivesmenuts.wav');
var shiver = new Audio('sounds/shivermetimbers.wav');
var ahoy = new Audio('sounds/ahoymatey.wav');
var lillylivered = new Audio('sounds/lillyliveredlandlubbers.wav');
var plank = new Audio('sounds/walktheplank.wav');


// Constructor Functions // 

var PirateQuestions = function(questions, flavor) {
    this.questions = questions;
    this.flavor = flavor;

};


var PirateIngredients = function(ingredients, amounts) {
    this.ingredients = ingredients;
    this.amounts;
};


var PirateBartender = function(questions) {
    this.questions = questions;
    this.userPreference = [];
}



PirateQuestions.prototype.display = function() {   
    $('.pirate-questions').text(' ');
    $('.pirate-questions').animateCss('zoomIn');
    $('.pirate-questions').append('<h2>' + this.questions + '</h2>');

};


// store random number and use same random number in splice()
// make var for holding random num 



PirateBartender.prototype.checkUserAnswerYes = function() {
	if (this.questions.length < 0) {

	} else {
        this.userPreference.push(this.currentQuestion.flavor);
        console.log(this.userPreference + " pushed");
        this.checkQuestions();
    }
    
};

PirateBartender.prototype.checkUserAnswerNo = function() {	
	this.checkQuestions();
	
};

PirateBartender.prototype.checkQuestions = function() {
    if (this.questions.length == 0) {        
        this.makeDrink();
        
    } else {
        var randomNum = Math.floor(Math.random() * questions.length);
        this.currentQuestion = this.questions[randomNum];
        this.questions.splice(randomNum, 1);
        this.currentQuestion.display();
    }
};


PirateBartender.prototype.makeDrink = function() {    
    for (var i = 0; i < this.userPreference.length; i++) {
        var flavor = this.userPreference[i];
        var flavorIngredients = Ingredients[flavor];
        var randomNum = Math.floor(Math.random() * flavorIngredients.length);
        var randomIngredient = flavorIngredients[randomNum];
        $('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + "Here's yer " + randomIngredient + '</h2>');
        $('.pirate-questions').animateCss('zoomIn');
        $('#btn-yes').unbind('click');
        $('#btn-no').unbind('click');        
        yar.play();
        this.askJoke();

    }
    
	console.log(this.userPreference);

}


PirateBartender.prototype.askJoke = function() {
	setTimeout(function() {
		var askJoke = "Now that ye have yer drink, will ye indulge me passions and listen to a joke?";
        $('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + askJoke + '</h2>');

        $('.pirate-questions').animateCss('zoomIn');        
    }, 2500);
    $('#btn-yes').click(this.tellJoke);
    $('#btn-no').click(this.angry);


}


PirateBartender.prototype.tellJoke = function() {
		var tellJoke1 = "SO.... a pirate walks into a bar, "
		var tellJoke2 = "and he has a huge steering wheel from a ship, stuck in the front of his pants. "
		var tellJoke3 = "He sits down at the bar(don't ask how) and demands a drink. "
		var tellJoke4 = "The befuddled bartender quickly complies, and hands him the drink. "
		var tellJoke5 = "Finally, unable to contain himself any longer, the bartender says  "
		var tellJoke6 = "Um, I dont mean to be rude, but do you mind me asking about that... huge thing...doesn't it bother you?"
		$('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + tellJoke1 + '</h2>');
        $('.pirate-questions').animateCss('zoomIn');  
        setTimeout(function(){
        $('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + tellJoke2 + '</h2>');
        $('.pirate-questions').animateCss('zoomIn');        
    }, 2500);
        setTimeout(function(){
        $('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + tellJoke3 + '</h2>');
        $('.pirate-questions').animateCss('zoomIn');        
    }, 6500);
        setTimeout(function(){
        $('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + tellJoke4 + '</h2>');
        $('.pirate-questions').animateCss('zoomIn');        
    }, 10500);
        setTimeout(function(){
        $('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + tellJoke5 + '</h2>');
        $('.pirate-questions').animateCss('zoomIn');        
    }, 14500);
        setTimeout(function(){
        $('.pirate-questions').text(' ');
        $('.pirate-questions').append('<h2>' + tellJoke6 + '</h2>');
        $('.pirate-questions').animateCss('zoomIn');        
    }, 18500);
        setTimeout(function(){
        	$('#btn-yes').hide();
        	$('#btn-no').hide();
        	$('#btn-answer').fadeIn(500);
        	$('#btn-answer').click(function(){
        		drivesMe.play(); 
        	});
            
    }, 22500);

        
}


PirateBartender.prototype.angry = function() {
	lillylivered.play();
	setTimeout(function(){
			plank.play();
	}, 2500);
};





var questions = [
    new PirateQuestions('Do ye like yer drinks strong?', 'strong'),
    new PirateQuestions('Do ye like it with a salty tang?', 'salty'),
    new PirateQuestions('Are ye a lubber who likes it bitter?', 'bitter'),
    new PirateQuestions('Would ye like a bit of sweetness with yer poison?', 'sweet'),
    new PirateQuestions('Are ye one for a fruity finish?', 'fruity')

];

// var ingredients = [
// 	new PirateIngredients('Glug of rum', 'strong');
// 	new PirateIngredients('Slug of whiskey', 'strong');
// 	new PirateIngredients('Splash of gin', 'strong');
// 	new PirateIngredients('Olive on a stick', 'salty');
// 	new PirateIngredients('Salt-dusted rim', 'salty');
// 	new PirateIngredients('Rasher of bacon', 'salty');
// 	new PirateIngredients('Shake of bitters', 'bitter');
// 	new PirateIngredients('Splash of tonic', 'bitter');
// 	new PirateIngredients('Twist of lemon peel', 'bitter');
// 	new PirateIngredients('Sugar cube', 'sweet');
// 	new PirateIngredients('Spoonful of honey', 'sweet');
// 	new PirateIngredients('Splash of cola', 'sweet');
// 	new PirateIngredients('Slice of orange', 'fruity');
// 	new PirateIngredients('Splash of cassis', 'fruity');
// 	new PirateIngredients('Cherry on top', 'fruity');

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




var pirate = new PirateBartender(questions);








$(document).ready(function() {

    $('.entrance').show();
    $('.inside').hide();


    $('.enter-button').click(function() {
        $('.entrance').animateCss('slideOutUp');
        $('.inside').animateCss('fadeIn');
        $('.inside').show();
        
        tavern.play();
        tavern.loop = true;
        tavern.volume = 0.3;
        ahoy.play();      

    });

    $('.enter-button').click(pirate.checkQuestions.bind(pirate));

    $('#btn-yes').click(pirate.checkUserAnswerYes.bind(pirate));
    $('#btn-no').click(pirate.checkUserAnswerNo.bind(pirate));
 

});
