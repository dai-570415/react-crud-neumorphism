import React from 'react';
import Posts from './posts/Index';
import SignOut from './FirebaseAuthHook/SignOut';
import Nav from '../components/elements/Nav';

const Index = () => {
    return(
        <section className="content">
            <Nav />
            <div className="post-page">
                <SignOut />
                <Posts />
            </div>
        </section>
    );
}

export default Index;