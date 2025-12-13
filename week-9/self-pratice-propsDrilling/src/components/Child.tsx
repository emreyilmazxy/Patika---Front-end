type ChildProps = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
};

function Child({ text, setText }: ChildProps) {
    return (
        <div>
            <h4>Child Component</h4>
            <p>{text} </p>
            <input onChange={(e) => setText(e.target.value)} placeholder="bir şey yaz" value={text} />
        </div>


    );
}

export default Child;
