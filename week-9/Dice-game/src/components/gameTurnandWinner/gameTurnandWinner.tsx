import './gameTurnandWinner.css'

type GameTurnandWinnerProps = {
    player1Name: string;
    player2Name: string;
    gameStatus: string;
}

export default function GameTurnandWinner({ player1Name, player2Name, gameStatus }: GameTurnandWinnerProps) {

    const getMessage = () => {
        switch (gameStatus) {
            case "waiting":
                return "Zar atmak için butona tıkla!";
            case "rolling":
                return "🎲 Zarlar atılıyor...";
            case "player1":
                return `🎉 ${player1Name} Kazandı!`;
            case "player2":
                return `💻 ${player2Name} Kazandı!`;
            case "draw":
                return "🤝 Berabere!";
            default:
                return "";
        }
    }

    return (
        <div className='game-turn-winner'>
            <h2 className='turn-winner-title'>{getMessage()}</h2>
        </div>
    );
}