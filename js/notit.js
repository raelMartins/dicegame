/*

*****************************

var markHeight, johnHeight, markWeight, johnWeight;

markHeight = 1.82;
johnHeight = 1.90;

markWeight = 74;
johnWeight = 80;

var markBmi = markWeight/(markHeight * markHeight);
var johnBmi = johnWeight/(johnHeight * johnHeight);

var markHigher = markBmi > johnBmi;

console.log(markBmi, johnBmi)

console.log("So we can see that the statement that Mark's BMI is higher than John's is " + markHigher);

*****************************

var johnTeamAvg = (112  + 112 + 112)/3;
var mikeTeamAvg = (117 + 95 + 124)/3;
var maryTeamAvg = (97 + 134 + 105)/3;

if ( johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg){
    console.log("John's team wins with an average score of " + johnTeamAvg);
}
else if ( mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg){
    console.log("Mike's team wins with an average score of " + mikeTeamAvg);
}
else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg){
    console.log("Mary's team wins with an average score of " + maryTeamAvg);
}
else if(johnTeamAvg == maryTeamAvg && johnTeamAvg > mikeTeamAvg) {
    console.log("There seems to be a draw between John and Mary both on " + johnTeamAvg);
}
else if(mikeTeamAvg == maryTeamAvg && mikeTeamAvg > johnTeamAvg) {
    console.log("There seems to be a draw between Mike and Mary both on " + mikeTeamAvg);
}
else if(johnTeamAvg == mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
    console.log("There seems to be a draw between John and Mike both on " + johnTeamAvg);
}
else {
    console.log("It seems we have a three-way tie! Everyone got " + johnTeamAvg + "!");
}

*****************************
var bills = [124, 48, 268];
 var tips = [];
 var final = [];

 function tipCalc(bill){

     if( bill < 50){
        return(bill * 0.2 );
     }
     else if (bill >= 50 && bill <= 200) {
        return(bill * 0.15); 
     }
     else if (bill > 200) {
         return(bill * 0.1);
     }
     else {
         console.log('there is a problem'); 
     }
 }

tips[0] = tipCalc(bills[0]);
tips[1] = tipCalc(bills[1]);
tips[2] = tipCalc(bills[2]);

console.log(tips);

final[0] = tips[0] + bills[0];
final[1] = tips[1] + bills[1];
final[2] = tips[2] + bills[2];

console.log(final)

***********************************
var mark = {
    firstName: 'Mark',
    lastName: 'Hamill',
    height: 1.82,
    weight: 74,
    calcBmi: function(){
        this.bmi = this.weight/(this.height * this.height);
        return this.bmi;
    }
}

var john = {
    firstName: 'John',
    lastName: 'Cena',
    height: 1.90,
    weight: 80,
    calcBmi: function(){
        this.bmi = this.weight/(this.height * this.height);
        return this.bmi;
    }
}

mark.calcBmi();
john.calcBmi();

function higherBmi(fname, lname, bmi){
    console.log(fname + " " + lname + " had the higher BMI of " + bmi)
} 

if (mark.bmi > john.bmi) {
    higherBmi(mark.firstName, mark.lastName, mark.bmi);
}
else if (john.bmi > mark.bmi) {
    higherBmi(john.firstName, john.lastName, john.bmi);
}
else {
    console.log("They both have a BMI of " + john.bmi);
}
*****************************************

 var john = {
     fullName: 'John Doe',
     bills: [124, 48, 268, 180, 42],
     calcTip: function() {
         this.tips = [];
         this.final = [];

         for (var i = 0; i < this.bills.length; i++){
            var percentage;

            var bill = this.bills[i];
             if ( bill < 50){
                 percentage = 0.2;
             }
             else if(bill >= 50 && bill <= 200){
                 percentage = 0.15;
             }
             else if(bill > 200) {
                 percentage = 0.1;
             }

             this.tips[i] = bill * percentage;
             this.final[i] = bill + (bill * percentage);
         }
     }
 }

var mark = {
     fullName: 'Mark Hamill',
     bills: [77, 375, 110, 45],
     calcTip: function() {
         this.tips = [];
         this.final = [];

         for (var i = 0; i < this.bills.length; i++){
            var percentage;

            var bill = this.bills[i];
             if ( bill < 100){
                 percentage = 0.2;
             }
             else if(bill >= 100 && bill <= 300){
                 percentage = 0.10;
             }
             else if(bill > 300) {
                 percentage = 0.25;
             }

             this.tips[i] = bill * percentage;
             this.final[i] = bill + (bill * percentage);
         }
     }
 }

 john.calcTip();
 mark.calcTip();

 function average(tip){
     var sum = 0;
     for(var i = 0; i < tip.length; i++ ){
         sum += tip[i];
     }

     return (sum/tip.length);
 }


 john.avg = average(john.tips);
 mark.avg = average(mark.tips);

 console.log(john, mark);

 if (john.avg > mark.avg){
     console.log( john.fullName + "'s family spent more on tips than " + mark.fullName + "'s")
 }
 else if (john.avg < mark.avg){
    console.log( mark.fullName + "'s family spent more on tips than " + john.fullName + "'s")
}
else {
    console.log("They spent the same amount on tips")
}


********************************************************************


var scores, roundScore, activePlayer, gamePlaying;

init();

var highScore, pname0, pname1;

document.getElementById('beg-btn').addEventListener('click', submit)

document.querySelector('.btn-roll').addEventListener('click', function () {
   
    if(gamePlaying){

        // hide input fields
        submit();
        
        //1, Generate a random number
        var dice0 = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        //2, Display the result on the webpage
        var diceDOM1 = document.querySelector('#dice-0');
        diceDOM1.style.display = 'block';
        diceDOM1.src = 'dice' + dice0 + '.png';

        var diceDOM2 = document.querySelector('#dice-1');
        diceDOM2.style.display = 'block';
        diceDOM2.src = 'dice' + dice1 + '.png';

        //Check if the last rolled and current roled are 6
        if (dice0 === 6 && dice1 === 6){
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }

        //3, Update the round score only if the rolled number wasn't a 1
        if ( dice0 !== 1 || dice1 !== 1) {
            //Add 
            roundScore += dice0 + dice1;
            document.querySelector("#current-" + activePlayer).textContent = roundScore;
        }
        else {
            //Next Player
        nextPlayer();
        }
    }
}) 

document.querySelector('.btn-hold').addEventListener('click', function(){
  if(gamePlaying) {
    //Add current score to players global score
    scores[activePlayer] += roundScore;

    //Update the Ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won the game
    if (highScore){
        (scores[activePlayer] >= highScore) ?  win() : nextPlayer();
    }
    else {
        (scores[activePlayer] >= 100) ?  win() : nextPlayer();
    }
}

})

function nextPlayer () {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
  
    document.querySelector('.player-0-panel').classList.toggle('active') 
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0]
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';

    document.getElementById('score').style.display = 'block';
    document.getElementById('score').value= "";
    document.getElementById('pname0').style.display = 'block';
    document.getElementById('pname0').value= "";
    document.getElementById('pname1').style.display = 'block';
    document.getElementById('pname1').value= "";
    document.getElementById('beg-btn').style.display = 'block';

    document.getElementById('score-0').textContent = "0";
    document.getElementById('score-1').textContent = "0";
    document.getElementById('current-0').textContent = "0";
    document.getElementById('current-1').textContent = "0";

    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}

function submit() {
    highScore = document.getElementById('score').value;
    pname0 = document.getElementById('pname0').value;
    pname1 = document.getElementById('pname1').value;

    document.querySelector('#score').style.display = 'none';
    document.querySelector('#pname0').style.display = 'none';
    document.querySelector('#pname1').style.display = 'none';
    document.querySelector('#beg-btn').style.display = 'none';

    if (pname0 && pname1) {
    document.getElementById('name-0').textContent = pname0;
    document.getElementById('name-1').textContent = pname1;
    }
    else {
    document.getElementById('name-0').textContent = "Player 1";
    document.getElementById('name-1').textContent = "Player 2";
    }
}

function win() {
    gamePlaying = false;
    roundScore = 0;

    document.getElementById('name-' + activePlayer).textContent = "WINNER!!";
    document.querySelector('#dice-0').style.display = 'none';
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.getElementById("current-" + activePlayer).textContent = roundScore;
}


**********************************************************************************************************

*/


