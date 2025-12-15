import './noteItem.css';

type NoteItemProps = {
    id: number;
    text: string;
    color: string;
    onDelete: (id: number) => void;
}

const NoteItem = ({ id, text, color, onDelete }: NoteItemProps) => {
    return (
        <div className="note-item" style={{ backgroundColor: color }}>
            <button className="delete-btn" onClick={() => onDelete(id)}>×</button>
            <p>{text}</p>
        </div>
    );
}

export default NoteItem;