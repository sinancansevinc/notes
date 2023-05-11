import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const NotePage = ({ match, history }) => {

    const { id } = useParams();

    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()

    }, [id])


    let createNote = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: "New Note", created_by: 1, body: note.body })
        }

        await fetch("/api/notes/", requestOptions)

    }

    let updateNote = async () => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: note.title, created_by: note.created_by.id, body: note.body })
        }

        await fetch("/api/notes/" + id + "/", requestOptions)

    }

    let deleteNote = async () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        }

        await fetch("/api/notes/" + id + "/", requestOptions)

    }

    let handleSubmit = () => {
        if (id !== 'new' && !note.body) {
            deleteNote()
        }
        else if (id !== 'new') {
            updateNote()
        }
        else if (id === 'new' && note !== null) {
            createNote()
        }
        window.location.replace("/");

    }

    let getNote = async () => {
        if (id === 'new') return
        let response = await fetch("/api/notes/" + id)

        if (response.status !== 200) {
            window.location.replace("/");

        }

        let data = await response.json()

        setNote(data)
    }



    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <ArrowLeft onClick={handleSubmit} />
                </h3>
                {id !== 'new' ? (
                    <button onClick={deleteNote}>Delete</button>

                ) : (
                    <button onClick={handleSubmit}>Done</button>

                )}


            </div>
            <textarea onChange={(e) => setNote({ ...note, 'body': e.target.value })} defaultValue={note?.body}></textarea>

        </div>


    )
}

export default NotePage
