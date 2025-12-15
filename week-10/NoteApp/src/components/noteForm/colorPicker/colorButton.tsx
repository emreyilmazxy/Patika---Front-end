import './colorButton.css'

type ColorButtonProps = {
    onSelectColor: (color: string) => void;
}

const ColorButton = ({ onSelectColor }: ColorButtonProps) => {

    return (<div className="color-picker">
        <button type="button" className="clr-btn red" onClick={() => onSelectColor("red")} />
        <button type="button" className="clr-btn blue" onClick={() => onSelectColor("blue")} />
        <button type="button" className="clr-btn green" onClick={() => onSelectColor("green")} />
        <button type="button" className="clr-btn yellow" onClick={() => onSelectColor("yellow")} />
        <button type="button" className="clr-btn purple" onClick={() => onSelectColor("purple")} />
    </div>);

}

export default ColorButton;