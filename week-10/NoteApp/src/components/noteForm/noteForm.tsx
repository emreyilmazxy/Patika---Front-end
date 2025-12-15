import { useState } from "react";
import "./noteForm.css";
import { ColorButton } from "./colorPicker";

type NoteFormProps = {
    onAddNote: (text: string, color: string) => void;
}

const NoteForm = ({ onAddNote }: NoteFormProps) => {
    const [selectedColor, setSelectedColor] = useState<string>("red");
    const [noteText, setNoteText] = useState<string>("");

    const handleColorSelect = (color: string) => {
        setSelectedColor(color);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (noteText.trim()) {
            onAddNote(noteText, selectedColor);
            setNoteText("");
        }
    };

    return (
        <form className='note-textarea-wrapper' onSubmit={handleSubmit}>
            <textarea
                placeholder='Enter your note here'
                name="note"
                id="note"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
            />
            <ColorButton onSelectColor={handleColorSelect} />
            <button type='submit' className='add-btn'>Add</button>
        </form>
    );
}

export default NoteForm;