import React from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../Firebase';
import SignOut from '../FirebaseAuthHook/SignOut';
import BackTopIcon from '../../assets/img/backtop.png';
import styled from 'styled-components';

const BackTopStyle = styled.img`
  width: 50px;
  top: 25px;
  left: 25px;
  position: fixed;
  zIndex: 11,
`;

const Index = () => {
    // Firebese Auth uid, email取得
    const user = firebase.auth().currentUser;
    let authId;
    let email;
    let name;
    let photoURL;

    if (user != null) {
        user.providerData.forEach(() => {
            authId = user.uid;
            email = user.email;
            name = user.displayName;
            photoURL = user.photoURL;
        });
    }
    console.log(authId);
    console.log(email);
    console.log(name);
    console.log(photoURL);

    return(
        <React.Fragment>
            <SignOut />
            <Link to="/">
                <BackTopStyle
                    src={ BackTopIcon }
                    alt="Topに戻る"
                />
            </Link>

            ここにユーザー情報入れていく
        </React.Fragment>
    );
}

export default Index;