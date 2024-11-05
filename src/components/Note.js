
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import env from '../env.json';


function Note() {
    let { noteURL } = useParams();

    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('hide');
    const [errorClass, setErrorClass] = useState('hide');

    useEffect(() => {
        if (noteURL !== undefined) {
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ 'url': noteURL })
            })
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrorClass('hide');
                    }
                    else if (!response.result) {
                        setLineClass('hide');
                        setFormClass('hide');
                        setErrorClass('');
                    }
                })
        }
        else {
            setLineClass('hide');
            setFormClass('');
            setErrorClass('hide');
        }
    }, []);

    function getNote(event) {
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Fill out the form');
            return false;
        }
        noteURL = url;
        window.location.href = env.url + '/' + url;
    }

    function serchNote() {
        window.location.href = env.url;
    }

    return (
        <div className="row">
            <div className="col-12">
                <div className={lineClass}>
                    <div className="alert alert-success" role="alert">
                        <h4>Note:</h4>
                        <div>{noteText}</div>
                        <hr />
                        <div className="text-right"><button onClick={serchNote} className="btn btn-dark">See another message</button></div>
                    </div>
                </div>
                <div className={errorClass}>
                    <div className="alert alert-danger" role="alert">
                        <p>Error: There is no such message.</p>
                    </div>
                </div>
                <div className="text">
                    <div className={formClass}>
                        <form action='' onSubmit={getNote}>
                            <label htmlFor='url'>Enter the hash of message</label>
                            <input type='text' name='url' id='url' className='form-control' />
                            <button type='submit' className='btn btn-dark'>Search for a message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Note;