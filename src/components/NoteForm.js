import React, { useRef, useState } from 'react'
import Toggable from './Toggable'

export default function NoteForm({ addNote, handleLogout }) {

    const [newNote, setNewNote] = useState('')
    const toggableRef = useRef()

    const handleChange = (event) => {
        setNewNote(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5,
        }

        addNote(noteObject)
        setNewNote('')

        toggableRef.current.toggleVisibility()
    }

    console.log(toggableRef)

    return (
        <Toggable buttonLabel='New note' ref={toggableRef}>
            <h3>Create a new note</h3>

            <form onSubmit={handleSubmit}>
                <input
                    placeholder='Add a new note content'
                    value={newNote}
                    onChange={handleChange}
                />
                <button type="submit">save</button>
            </form>

            <div>
                <button onClick={handleLogout}>
                    Cerrar session
                </button>
            </div>
        </Toggable>
    )
}