import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthContext } from './AuthProvider';
import SignOut from './SignOut';

const Signup = ({ history }) => {
    const { signup } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signup(email.value, password.value, history);
    }

    return (
        <React.Fragment>
            <SignOut />
            <h2>Sign up</h2>
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
                <button type="submit">Sign up</button>
            </form>
            <div className="link">
                <Link to="/">アカウントお持ちの方はこちら</Link>
            </div>
        </React.Fragment>
    );
}

export default withRouter(Signup);