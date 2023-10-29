import './Navbar.scss';

export default function AltNav () {

    return (
        <>
            <div id="navbar">
                <div className="navbar-container">
                    <div className="left-nav">
                        <a className='author-logo' href="/">
                            LOGO HERE
                        </a>
                    </div>

                    <div className="right-nav">
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}