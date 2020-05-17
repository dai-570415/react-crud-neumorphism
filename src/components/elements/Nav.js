import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import HomeIcon from '../../assets/img/nav-earth.png';
import RegisterIcon from '../../assets/img/nav-register.png';

const Nav = () => {
    return(
        <React.Fragment>
            <nav className="nav">
                <Link to="/" className="link">
                    <img className="pc-icon" src={ HomeIcon } alt="Dashboard"/>
                    <img className="sp-icon" src={ HomeIcon } alt="Dashboard"/>
                    <span className="pc-icon-text">Home</span>
                    <span className="sp-icon-text">Home</span>
                </Link>
                
                {/* Auth パターン1 */}
                {/* <Link to="/signup" className="link">
                    <img className="pc-icon" src={ RegisterIcon } alt="Signup"/>
                    <img className="sp-icon" src={ RegisterIcon } alt="Signup"/>
                    <span className="pc-icon-text">Sign up</span>
                    <span className="sp-icon-text">Sign up</span>
                </Link>
                <Link to="/signin" className="link">
                    <img className="pc-icon" src={ UserIcon } alt="Signin"/>
                    <img className="sp-icon" src={ UserIcon } alt="Signin"/>
                    <span className="pc-icon-text">Sign in</span>
                    <span className="sp-icon-text">Sign in</span>
                </Link> */}

                {/* Auth パターン2 */}
                <Link to="/signup_hook" className="link">
                    <img className="pc-icon" src={ RegisterIcon } alt="Signup"/>
                    <img className="sp-icon" src={ RegisterIcon } alt="Signup"/>
                    <span className="pc-icon-text">Sign up</span>
                    <span className="sp-icon-text">Sign up</span>
                </Link>
            </nav>
        </React.Fragment>
    );
}

export default withRouter(Nav);