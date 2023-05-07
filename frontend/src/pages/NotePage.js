import React from 'react';
import { useParams } from "react-router-dom";

const NotePage = ({ match }) => {

    const { id } = useParams();

    return (
        <div>
            <h1>Single Note {id} </h1>
        </div>
    )
}

export default NotePage
