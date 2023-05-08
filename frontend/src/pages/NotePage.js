import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const NotePage = ({ match }) => {

    const { id } = useParams();

    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()

    }, [id])

    const updateNote = async () => {
        console.log(note)
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: note.title, created_by: note.created_by.id, body: 'Updated' })
        }

        const response = await fetch("/api/notes/" + id + "/", requestOptions)
        const data = await response.json()
        console.log(data)
    }

    let getNote = async () => {
        let response = await fetch("/api/notes/" + id)
        let data = await response.json()
        setNote(data)

    }

    return (
        <div className='note'>
            <textarea defaultValue={note?.body}></textarea>



            <button onClick={updateNote}>Update</button>
        </div>


    )
}

export default NotePage
