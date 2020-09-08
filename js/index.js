//ES6 version

//GAME CONTROLLER
const gameController = (() => {

    //Keep all your data in a single object
    const data = {
        scores: [0,0],
        activePlayer: 0,
        roundScore: 0,
        gamePlaying: false
    }

    return {
        startGame: () => data.gamePlaying = true,
        updateRoundScore: (rand1, rand2) => {
            data.roundScore += rand1 + rand2;
            
        },

        holdGame: () => {
            data.scores[data.activePlayer] += data.roundScore;
        },

        changePlayer: () => {

            data.activePlayer === 0? data.activePlayer = 1: data.activePlayer = 0;
            data.roundScore = 0;
        },
        getData: () => {
            return {
                scores: data.scores,
                activePlayer: data.activePlayer,
                roundScore: data.roundScore,
                gamePlaying: data.gamePlaying
            }
        },
        defaultScores: () => {
            data.scores = [0,0];
            data.activePlayer = 0;
            data.roundScore = 0;
            data.gamePlaying = false;
        },

        testing: () => {
            return data;
        }
    }
})();

//UI CONTROLLER
const UIController = (() => {

    const DOMStrings = {
        dice1: '#dice-0',
        dice2: '#dice-1',
        beginButton:'#beg-btn',
        newGameBtn: '.btn-new',
        holdDice: '.btn-hold',
        rollDice: '.btn-roll',
        highScoreVal: '#score',
        player1Name: '#pname0',
        player2Name: '#pname1',
        name1: '#name-0',
        name2: '#name-1', 
        highscore1:'#score-0',
        highscore2:'#score-1',
        roundscore1:'#current-0',
        roundscore2:'#current-1',
        playerPanel1: '.player-0-panel',
        playerPanel2: '.player-1-panel',
        docBody: '.body'
    }

        return {
            hideDice: () => {
                document.querySelector(DOMStrings.dice1).style.display = 'none';
                document.querySelector(DOMStrings.dice2).style.display = 'none';
            },

            showDice: (num1, num2) => {
                document.querySelector(DOMStrings.dice1).style.display = 'block';
                document.querySelector(DOMStrings.dice1).src = `./dice/dice${num1}.png`;

                document.querySelector(DOMStrings.dice2).style.display = 'block';
                document.querySelector(DOMStrings.dice2).src = `./dice/dice${num2}.png`;
            },
            displayInputs: inp => {
                inp.player1 ? document.querySelector(DOMStrings.name1).textContent = inp.player1 : document.querySelector(DOMStrings.name1).textContent = "Player 1";
                inp.player2 ? document.querySelector(DOMStrings.name2).textContent = inp.player2 : document.querySelector(DOMStrings.name2).textContent = "Player 2";
            },

            inputBoxDisplay: tof => {
                let val = 'none';
                tof === true? val = 'block': val = 'none';

                const fields = document.querySelectorAll(`${DOMStrings.highScoreVal} , ${DOMStrings.player1Name}, ${DOMStrings.player2Name}, ${DOMStrings.beginButton}`);
    
                fieldsArr = Array.from(fields);
    
                fieldsArr.forEach(cur => {
                    cur.style.display = val;
                })
                //fieldsArr[1].focus()
            },

            defaultValues: () => {
                const scores = document.querySelectorAll(`${DOMStrings.highscore1} , ${DOMStrings.highscore2}, ${DOMStrings.roundscore1}, ${DOMStrings.roundscore2}`);
    
                scoresArr = Array.from(scores);
    
                scoresArr.forEach(cur => {
                    cur.textContent = 0;
                })
            },
            updateScore: data => {
                document.querySelector(`#current-${data.activePlayer}`).textContent = data.roundScore;
            },
            totalScores: data => {
                document.querySelector(`#score-${data.activePlayer}`).textContent = `${data.scores[data.activePlayer]}`;
            },
            win: data => {

                document.querySelector(`#name-${data.activePlayer}`).textContent = "WINNER!!";
                document.querySelector(`.player-${data.activePlayer}-panel`).classList.add('winner');
                document.querySelector(`.player-${data.activePlayer}-panel`).classList.remove('active');
                document.querySelector(`#score-${data.activePlayer}`).textContent = data.scores[data.activePlayer];

            },
            removeWinner: () => {
                document.querySelector(DOMStrings.playerPanel1).classList.remove('winner')

                document.querySelector(DOMStrings.playerPanel2).classList.remove('winner');
            },
            changeActive: () => {

                document.querySelector(DOMStrings.roundscore1).textContent = 0;
                document.querySelector(DOMStrings.roundscore2).textContent = 0;
                
        
                document.querySelector(DOMStrings.playerPanel1).classList.toggle('active') 
                document.querySelector(DOMStrings.playerPanel2).classList.toggle('active')
            },
            defaultActive: () => {
                document.querySelector(DOMStrings.playerPanel1).classList.add('active')

                document.querySelector(DOMStrings.playerPanel2).classList.remove('active')
            },

            clearFields: () => {
                const fields = document.querySelectorAll(`${DOMStrings.highScoreVal} , ${DOMStrings.player1Name}, ${DOMStrings.player2Name}`);
    
                fieldsArr = Array.from(fields);
    
                fieldsArr.forEach(cur => {
                    cur.value = "";
                }) 
            },

            changeBackground: () => {
                let rand = Math.floor(Math.random() * 6);
                const backgrounds = ['bgimage','dope\ af','GOT\ Wallpaer\ LS', 'GOT\ wallpaper','nodopenohope', 'soul', 'avengers']

                document.querySelector(DOMStrings.docBody).style.backgroundImage = `url('./img/backgrounds/${backgrounds[rand]}.jpg')`;
                //document.querySelector('.body').style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./backgrounds/${backgrounds[rand]}.jpg')`;
            },
            getInput: () => {
                return {
                    highScore: document.querySelector(DOMStrings.highScoreVal).value,
                    player1: document.querySelector(DOMStrings.player1Name).value,
                    player2: document.querySelector(DOMStrings.player2Name).value
                }
            },
            getDomStrings: () => DOMStrings
        }
})();

//GENERAL CONTROLLER
const controller = ((gameCtrl, uiCtrl) => {

    const newGame = () => {

        console.log('New game begins');

        //All values should revert to zero
        uiCtrl.defaultValues();
        //All scores should revert to zero
        gameCtrl.defaultScores();
        //Dice should be hidden
        uiCtrl.hideDice();
        //Player name's be reverted to default
        uiCtrl.clearFields();
        uiCtrl.displayInputs(uiCtrl.getInput());
        //remove winner class
        uiCtrl.removeWinner();
        //Change the active class to default
        uiCtrl.defaultActive();
        //the input boxes should return
        uiCtrl.inputBoxDisplay(true);
        //change the wallpaper
        uiCtrl.changeBackground();
    }
    const newActive = () => {
        //change the active player
        gameCtrl.changePlayer();
        //show the active player change on the Ui
        uiCtrl.changeActive();
        uiCtrl.hideDice();
    };
    const rollDice = () => {
        console.log('Die rolled');
        //generate two random numbers
        let rn1 = Math.floor((Math.random() * 6) + 1);
        let rn2 = Math.floor((Math.random() * 6) + 1);

        //use each number to show each of the dice
        console.log(rn1, rn2);
        if (rn1 !== 1 || rn2 !== 1) {
            uiCtrl.showDice(rn1, rn2);
            //add the generated numbers together and use as the round score for the active player
            gameCtrl.updateRoundScore(rn1,rn2);

            //display the roundscore on the UI
            uiCtrl.updateScore(gameCtrl.getData());
        }
        else newActive();

        if (rn1 === 6 && rn2 === 6) {
            gameCtrl.getData().scores[gameCtrl.getData().activePlayer] = 0;
            uiCtrl.totalScores(gameCtrl.getData())
            newActive();
        }
    };
    const holdScore = () => {
        //store the round score in the total score
        gameCtrl.holdGame();
        const highSc = uiCtrl.getInput().highScore;
        const playerScore = gameCtrl.getData().scores[gameCtrl.getData().activePlayer];
        //check if the score is greater than highscore or 100
        if (highSc) {
            console.log(`The highscore is ${highSc}`);
            if (playerScore < highSc) {
                //Display the total score on the UI
                uiCtrl.totalScores(gameCtrl.getData());
                newActive();
            } else {
                winner();
            }

        } else {
            console.log(`The highscore is 100`);
            if (playerScore < 100) {
                //store the round score in the total score
                //gameCtrl.holdGame();
                //Display the total score on the UI
                uiCtrl.totalScores(gameCtrl.getData());
                newActive();
            } else {
                winner();

            }
        }
    };
    

    const setEventListeners = () => {

        const DOM = uiCtrl.getDomStrings();


        //For starting a new game again
        document.querySelector(DOM.newGameBtn).addEventListener('click', newGame);
        
        //For accepting input values and applying them to the game using Mouseclick
        document.querySelector(DOM.beginButton).addEventListener('click', submit)
        
        /*
        //For accepting input values and applying them to the game using Enter
        document.addEventListener('keypress', el => {
            if (el.keyCode === 13 && uiCtrl.inputBoxDisplay(false)) {
                submit();
            }
        })
        */

        //For rolling the dice( VERY PROBLEMATIC)
        document.querySelector(DOM.rollDice).addEventListener('click', () => {
            //check if the game is ongoing
            if (gameCtrl.getData().gamePlaying) {
                rollDice();
            }
        })

        // For holding the dice
        document.querySelector(DOM.holdDice).addEventListener('click', () => {
            //check i game is ongoing
            if (gameCtrl.getData().gamePlaying) {
                holdScore();
            }
            
        })
    }

    const submit = () => {
        console.log('info submitted')
        //accept the input values
        const inputs = uiCtrl.getInput();
        //Display the player names
        uiCtrl.displayInputs(inputs);
        //get rid of the input box and begin button
        uiCtrl.inputBoxDisplay(false);
        //start game
        gameCtrl.startGame();
    }

    const winner = () => {
        console.log(`Player ${gameCtrl.getData().activePlayer + 1} has won the gaame`)
        //change the UI
        uiCtrl.win(gameCtrl.getData());
        //hide the dice
        uiCtrl.hideDice();
        //set scores to deault
        gameCtrl.defaultScores(); 
    };

    return {
        init: () => {
            console.log('Application has started');
            //set up event listeners
            setEventListeners();
            //start new game
            newGame();
        }
    }
})(gameController, UIController);

controller.init();