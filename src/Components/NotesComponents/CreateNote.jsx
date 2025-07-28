import React, { useState } from "react";
import "./CreateNote.css";

function CreateNote(props){

    const [note, setNote] = useState({
        title: "",
        content: "",
        color: "#FFF9A6"
    })

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }))
    }

    function submitNote(event){
        props.onAdd(note);
        setNote({
            title: "",
            content: "",
            color: "#FFF9A6"
        })
        event.preventDefault();
    }

    return (
        <div className="form-Container">
            <form className="note-form">
                <input 
                    type="text" 
                    name ="title" 
                    placeholder="Title"
                    value={note.title}
                    onChange={handleChange}
                />
                <textarea 
                    name="content"
                    placeholder="Take note..."
                    rows={3}
                    value={note.content}
                    onChange={handleChange}
                />
                <label>Note Colour:</label>
                <div className="colour-options">
                    <label>
                        <input 
                            type="radio"
                            name="color"
                            value="#FFF9A6"
                            checked={note.color === "#FFF9A6"}
                            onChange={handleChange}   
                        />
                        <span className="colour-swatch" style={{ backgroundColor: "#FFF9A6" }}></span>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="color"
                            value="#AEDFF7"
                            checked={note.color === "#AEDFF7"}
                            onChange={handleChange}   
                        />
                        <span className="colour-swatch" style={{ backgroundColor: "#AEDFF7" }}></span>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="color"
                            value="#C6F6C3"
                            checked={note.color === "#C6F6C3"}
                            onChange={handleChange}   
                        />
                        <span className="colour-swatch" style={{ backgroundColor: "#C6F6C3" }}></span>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="color"
                            value="#FFC1C1"
                            checked={note.color === "#FFC1C1"}
                            onChange={handleChange}   
                        />
                        <span className="colour-swatch" style={{ backgroundColor: "#FFC1C1" }}></span>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="color"
                            value="#E9D6F2"
                            checked={note.color === "#E9D6F2"}
                            onChange={handleChange}   
                        />
                        <span className="colour-swatch" style={{ backgroundColor: "#E9D6F2" }}></span>
                    </label>
                    <label>
                        <input 
                            type="radio"
                            name="color"
                            value="#FFA75F"
                            checked={note.color === "#FFA75F"}
                            onChange={handleChange}   
                        />
                        <span className="colour-swatch" style={{ backgroundColor: "#FFA75F" }}></span>
                    </label>
                </div>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateNote;