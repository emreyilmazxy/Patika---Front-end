import './nodeList.css';
import { NoteItem } from './noteItem';
import type { Note } from '../../App';

type NoteListProps = {
    notes: Note[];
    onDeleteNote: (id: number) => void;
}

const NoteList = ({ notes, onDeleteNote }: NoteListProps) => {
    return (
        <div className='note-list'>
            {notes.map(note => (
                <NoteItem 
                    key={note.id} 
                    id={note.id}
                    text={note.text} 
                    color={note.color}
                    onDelete={onDeleteNote}
                />
            ))}
        </div>
    );
}

export default NoteList;