import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">Create and share encrypted message</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><NavLink className='nav-link active' to='/'>Home</NavLink></li>
                            <li className="nav-item"><NavLink className='nav-link active' to='/note'>Note</NavLink></li>
                            <li className="nav-item"><NavLink className='nav-link active' to='/create'>Create</NavLink></li>
                            <li className="nav-item"><NavLink className='nav-link active' to='/about'>About</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;