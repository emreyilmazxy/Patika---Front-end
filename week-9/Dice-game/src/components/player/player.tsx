import './player.css';

export default function Player({ name, dicePath }: { name: string, dicePath: string }) {
    return (
        <div className='player'>
            <h2 className='player-name'>{name}</h2>
            <div className="dice-img-wrapper">
                <img className='dice-img' src={dicePath} alt="dice" />
            </div>
        </div>
    )
}