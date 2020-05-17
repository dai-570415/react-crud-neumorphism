import React from 'react';
import firebase from '../../Firebase'
import SignOutIcon from '../../assets/img/signout.png';
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
    
    return(
        <React.Fragment>
            {user != null &&
                <div className="sign-out" onClick={() => firebase.auth().signOut()}>
                    <SignOutStyle
                        src={ SignOutIcon }
                        alt="Sign out"
                    />
                </div>
            }
        </React.Fragment>
    );
}

export default SignOut;