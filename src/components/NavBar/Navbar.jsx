import { Link } from 'react-router-dom';
import './Navbar.scss';


export default function Navbar () {

    const handleClick = (event, targetID) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetID);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth',
                // targetElement.scrollIntoView({ behavior: 'smooth' }); // đây là cách 2
            });
        }
    }

    return (
        <>
            <div id="navbar">
                <div className="navbar-container">
                    <div className="left-nav">
                        <a className='author-logo' href="/">
                            LOGO HERE
                        </a>
                        <div className="service">
                            <Link to="/" onClick={(e) => handleClick(e, 'content')}>Jobs Opportunities</Link>
                            <Link to="/" onClick={(e) => handleClick(e, 'form')}>Service for Business</Link>
                        </div>
                    </div>

                    <div className="right-nav">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}