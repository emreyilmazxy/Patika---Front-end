
import './App.css'
import Player from './components/player/player'
import dice1 from './assets/images/dice1.png';
import dice2 from './assets/images/dice2.png';
import dice3 from './assets/images/dice3.png';
import dice4 from './assets/images/dice4.png';
import dice5 from './assets/images/dice5.png';
import dice6 from './assets/images/dice6.png';
import GameTurnandWinner from './components/gameTurnandWinner/gameTurnandWinner';
import { useState } from 'react';

type GameStatus = "waiting" | "rolling" | "player1" | "player2" | "draw";

function App() {

  const [player1Dice, setPlayer1Dice] = useState<number>(1);
  const [player2Dice, setPlayer2Dice] = useState<number>(1);
  const [gameStatus, setGameStatus] = useState<GameStatus>('waiting');
  const [player1Name, setPlayer1Name] = useState<string>("Player 1");

  const diceArray: string[] = [dice1, dice2, dice3, dice4, dice5, dice6];


  const rollDice = (): void => {
    setGameStatus("rolling");

    const intervalId: number = setInterval(() => {
      const randomDice1: number = Math.floor(Math.random() * 6) + 1;
      const randomDice2: number = Math.floor(Math.random() * 6) + 1;

      setPlayer1Dice(randomDice1);
      setPlayer2Dice(randomDice2);
    }, 100);


    setTimeout(() => {
      clearInterval(intervalId);

      const dice1: number = Math.floor(Math.random() * 6) + 1;
      const dice2: number = Math.floor(Math.random() * 6) + 1;

      setPlayer1Dice(dice1);
      setPlayer2Dice(dice2);


      if (dice1 > dice2) {
        setGameStatus("player1");
      } else if (dice2 > dice1) {
        setGameStatus("player2");
      } else {
        setGameStatus("draw");
      }
    }, 3000);

    setTimeout(() => {
      setGameStatus("waiting");
    }, 5000);
  };

  return (
    <>
      <h1 className='title' > Dice Game </h1>
      <div className='name-input-wrapper'>
        <label htmlFor="nameInput"> Name:</label>
        <input id='nameInput' type="text" value={player1Name} onChange={(e) => setPlayer1Name(e.target.value)} />
      </div>


      <div className="container">
        <Player name={player1Name} dicePath={diceArray[player1Dice - 1]} />
        <Player name="PC" dicePath={diceArray[player2Dice - 1]} />
      </div>

      <button disabled={gameStatus === "rolling"} onClick={rollDice} className='roll-button'>Roll Dice</button>

      <GameTurnandWinner
        player1Name={player1Name}
        player2Name="PC"
        gameStatus={gameStatus}
      />
    </>
  )

}

export default App
