import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthContext } from './AuthProvider';
import GoogleAuth from './GoogleAuth';
import TwitterAuth from './TwitterAuth';
// import FacebookAuth from './FacebookAuth';
import GoogleIcon from '../../assets/img/google.png';
import TwiiterIcon from '../../assets/img/twitter.png';

const Signin = ({ history }) => {
    const { signin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signin(email.value, password.value, history);
    }

    return (
        <React.Fragment>
            <div className="sign-page">
                <h2>Sign in</h2>
                <form onSubmit={ handleSubmit }>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Sign in</button>
                </form>
                <div className="link">
                    <Link to="/signup_hook">アカウントお持ちでない方はこちら</Link>
                </div>
                <div className="another-line">or</div>
                <div className="sns-button">
                    <div className="google-icon" onClick={ GoogleAuth }><img src={ GoogleIcon } alt="Google認証" />
                        Googleアカウントで認証
                    </div>
                    <div className="twitter-icon" onClick={ TwitterAuth }><img src={ TwiiterIcon } alt="Twitter認証" />
                        Twitterアカウントで認証
                    </div>
                </div>
                {/* <div onClick={ FacebookAuth }>Facebook認証(検証中)</div> */}
            </div>
        </React.Fragment>
    );
}

export default withRouter(Signin);