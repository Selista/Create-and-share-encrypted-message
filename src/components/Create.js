import React from "react";
import { useState } from "react";
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }
    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Fill out the form');
            return false;
        }
        sendData({ 'note': note });
    }

    function createNewNote() {
        window.location.reload();
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className="text">
                    <form action='' onSubmit={loadDataFromForm} className={formClass}>
                        <div className="form-group">
                            <label htmlFor='note'>Enter a note</label>
                            <textarea name='note' className="form-control" id='note' defaultValue={''}></textarea>
                            <p><b>Attention!</b> The maximum length of a note is 1000 characters.</p>
                        </div>
                        <div className="form-group text-right">
                            <button className="btn btn-dark" type='submit'>Create</button>
                        </div>
                    </form>
                    <div className={lineClass}>
                        <div className="alert alert-primary" role="alert">{url}</div>
                        <p>Copy the URL and pass it on to the recipient. Attention! You can view the note only once!</p>
                        <div className="text-right"><button onClick={createNewNote} className="btn btn-dark">Create a new note</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Create;