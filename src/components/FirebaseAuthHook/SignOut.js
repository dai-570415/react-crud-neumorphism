import React, { useContext } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../Firebase'
import SignOutIcon from '../../assets/img/signout.png';
import { AuthContext } from './AuthProvider';
import styled from 'styled-components';

const SignOutStyle = styled.img`
  width: 50px;
  top: 25px;
  right: 25px;
  position: fixed;
  zIndex: 11,
`;

const SignOut = () => {

    const user = firebase.auth().currentUser;

    const { signout } = useContext(AuthContext);
    const onSignOut = () => {
        signout();
    }

    return(
        <React.Fragment>
            {user != null &&
                <div
                    className="sign-out"
                    onClick={ onSignOut }
                >
                    <SignOutStyle
                        src={ SignOutIcon }
                        alt="Sign out"
                    />
                </div>
            }
        </React.Fragment>
    );
}

export default withRouter(SignOut);