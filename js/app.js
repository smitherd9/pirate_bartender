var $ = require('jquery');




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
var ahoy = new Audio('sounds/ahoymatey.wav');
var lillylivered = new Audio('sounds/lillyliveredlandlubbers.wav');
var plank = new Audio('sounds/walktheplank.wav');


class PirateQuestions {
    constructor(questions, flavor) {
        this.questions = questions;
        this.flavor = flavor;
    }
    display() {
        $('.pirate-questions').text('');
        $('.pirate-questions').animateCss('zoomIn');
        $('.pirate-questions').append('<h2>' + this.questions + '</h2>');
    }

}


class PirateIngredients {
    constructor(ingredient, amount, flavor) {
        this.ingredient = ingredient;
        this.amount = amount;
        this.flavor = flavor;
    }
}


class PirateBartender {
    constructor(questions) {
        this.questions = questions;
        this.userPreference = [];
    }

    checkUserAnswerYes() {
        if (this.questions.length < 0) {

        } else {
            this.userPreference.push(this.currentQuestion.flavor);
            console.log(this.userPreference + " pushed");
            this.checkQuestions();
        }
    }

    checkQuestions() {
        if (this.questions.length === 0) {
            this.makeDrink();

        } else {
            var randomNum = Math.floor(Math.random() * questions.length);
            this.currentQuestion = this.questions[randomNum];
            this.questions.splice(randomNum, 1);
            this.currentQuestion.display();
        }
    }

    makeDrink() {

        $('.pirate-questions').text('');
        var randomIngArray = [];
        for (var i = 0; i < this.userPreference.length; i++) {
            var flavor = this.userPreference[i];
            var flavorIngredients = pantry[flavor];
            var randomNum = Math.floor(Math.random() * flavorIngredients.length);
            var randomIngredient = flavorIngredients[randomNum];
            randomIngArray.push(randomIngredient.ingredient);
            console.log(randomIngArray);


        }
        for (var i = 0; i < randomIngArray.length; i++) {
            // if (randomIngArray.length > 0) {
            $('.pirate-questions').html('<h2>' + "Here's yer " + randomIngArray + '</h2>');
            // $('.pirate-questions').append('<h2>' + ' with a ' + randomIngArray[i++] + '</h2>');
            // $('.pirate-questions').append('<h2>' + ' with a ' + randomIngArray[2] + '</h2>');
            // $('.pirate-questions').append('<h2>' + ' with a ' + randomIngArray[3] + '</h2>');
            // $('.pirate-questions').append('<h2>' + ' with a ' + randomIngArray[4] + '</h2>');
            $('.pirate-questions').animateCss('zoomIn');
        }
        console.log(randomIngredient.ingredient);
        yar.play();
        $('#btn-yes').off('click');
        $('#btn-no').off('click');
        this.askJoke();
        console.log(this.userPreference);

    }


    askJoke() {
        setTimeout(function() {
            var askJoke = "Now that ye have yer drink, will ye indulge me passions and listen to a joke?";
            $('.pirate-questions').text('');
            $('.pirate-questions').append('<h2>' + askJoke + '</h2>');
            $('.pirate-questions').animateCss('zoomIn');
        }, 2500);
        console.log(this);
        $('#btn-yes').click(this.sayJoke);
        $('#btn-no').click(this.angry);


    }


    sayJoke() {
        $('#btn-yes').fadeOut(500);
        $('#btn-no').fadeOut(500);

        var tellJoke = ['So... a pirate walks into a bar,',
            'and he has a huge steering wheel from a ship, stuck in the front of his pants.',
            "He sits down at the bar (don't ask how) and demands a drink.",
            "The befuddled bartender quickly complies, and hands him the drink.",
            "Finally, unable to contain himself any longer, the bartender says",
            "Um, I dont mean to be rude, but do you mind me asking about that... huge thing...doesn't it bother you?"

        ];

        $('.pirate-questions').text('');

        var jokeLoop = function(i) {
            if (tellJoke.length == i) {

                $('#btn-answer').fadeIn(500);
                $('#btn-answer').click(function() {
                    drivesMe.play();
                });

            } else {
                var joke = tellJoke[i];

                $('.pirate-questions').html('<h2>' + joke + '</h2>');
                $('.pirate-questions').animateCss('zoomIn');
                setTimeout(function() {
                    jokeLoop(i + 1);
                }, 4000);
            }

        };
        jokeLoop(0);
    }

    angry() {
        lillylivered.play();
        setTimeout(function() {
            plank.play();
        }, 2500);
    }

}


class PiratePantry {
    constructor() {
        this.strong = [];
        this.sweet = [];
        this.bitter = [];
        this.fruity = [];
        this.salty = [];
    }

    add(ingredient) {
        this[ingredient.flavor].push(ingredient);
    }

}









//  Questions to be asked to the user // 


var questions = [
    new PirateQuestions('Do ye like yer drinks strong?', 'strong'),
    new PirateQuestions('Do ye like it with a salty tang?', 'salty'),
    new PirateQuestions('Are ye a lubber who likes it bitter?', 'bitter'),
    new PirateQuestions('Would ye like a bit of sweetness with yer poison?', 'sweet'),
    new PirateQuestions('Are ye one for a fruity finish?', 'fruity')

];


var pirate = new PirateBartender(questions);



var pantry = new PiratePantry();
// Ingredients and Flavors  // 


pantry.add(new PirateIngredients('Glug of rum', 5, 'strong'));
pantry.add(new PirateIngredients('Slug of whiskey', 5, 'strong'));
pantry.add(new PirateIngredients('Splash of gin', 5, 'strong'));
pantry.add(new PirateIngredients('Olive on a stick', 6, 'salty'));
pantry.add(new PirateIngredients('Salt-dusted rim', 10, 'salty'));
pantry.add(new PirateIngredients('Rasher of bacon', 6, 'salty'));
pantry.add(new PirateIngredients('Shake of bitters', 7, 'bitter'));
pantry.add(new PirateIngredients('Splash of tonic', 10, 'bitter'));
pantry.add(new PirateIngredients('Twist of lemon peel', 15, 'bitter'));
pantry.add(new PirateIngredients('Sugar cube', 20, 'sweet'));
pantry.add(new PirateIngredients('Spoonful of honey', 20, 'sweet'));
pantry.add(new PirateIngredients('Splash of cola', 15, 'sweet'));
pantry.add(new PirateIngredients('Slice of orange', 15, 'fruity'));
pantry.add(new PirateIngredients('Splash of cassis', 5, 'fruity'));
pantry.add(new PirateIngredients('Cherry on top', 10, 'fruity'));




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
    $('#btn-no').click(pirate.checkQuestions.bind(pirate));


});
