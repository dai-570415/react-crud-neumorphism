import React from 'react';
import Posts from './posts/Index';
import SignOut from './FirebaseAuthHook/SignOut';

const Index = () => {
    return(
        <React.Fragment>
            <SignOut />
            <Posts />
        </React.Fragment>
    );
}

export default Index;