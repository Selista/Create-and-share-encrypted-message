function Main() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="text row">
                    <ul className="row button-list"></ul>
                    <li className="col-6"><a href="/create"><button className="btn btn-dark">Create a message</button></a></li>
                    <li className="col-6"><a href="/note"><button className="btn btn-dark">View a message</button></a></li>
                </div>
                <div className="main-top">
                    <p> <b>Create and share encrypted message</b> – a service for exchanging encrypted messages. Create a message, send a link to the message and your friend will be able to read it.</p>
                    <p>How to create a message?</p>
                    <ul>
                        <li>Follow the link</li>
                        <li>Paste a text and click Create</li>
                        <li>Send a generated address to a friend!</li>
                    </ul>
                    <p>How to read the messages? Go to the sent URL, or enter the address manually here</p>
                </div>
            </div>
        </div >
    );
}

export default Main;