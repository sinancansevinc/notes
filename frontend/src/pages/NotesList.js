import React, { useEffect, useState } from 'react'

const NotesList = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes()

    }, [])

    let getNotes = async () => {
        let response = await fetch("http://localhost:8000/api/notes/")
        let data = await response.json()
        console.log(data)
        setNotes(data)

    }

    return (
        <div>
            <div className='notes-list'>
                {notes.map((note, index) => (
                    <h3 key={index}>{note.title}</h3>
                )
                )}
            </div>
        </div>
    )
}

export default NotesList
