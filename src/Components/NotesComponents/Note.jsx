import "./Note.css";

function Note(props){
    return (
        <div className="note-container" style={{background: props.color}}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    )
}

export default Note;