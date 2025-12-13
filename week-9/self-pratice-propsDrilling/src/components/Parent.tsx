import Child from "./Child";

type ParentProps = {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
};

function Parent({ text, setText }: ParentProps) {
    return (
        <div>
            <h3>Parent Component</h3>
            <Child text={text} setText={setText} />
        </div>
    );
}

export default Parent;
