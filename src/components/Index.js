import React from 'react';
import Posts from './posts/Index';
import SignOut from './FirebaseAuthHook/SignOut';

const title = 'ReactとFirebase製SNSアプリ | Neumoct';
const description = 'こちらは、ReactとFirebaseを連携してSNSのような投稿することができるアプリサンプルです。';

// title
document.title = title;

// title以外のmeta
const headData = document.head.children;

for (let i = 0; i < headData.length; i++) {
    const nameVal = headData[i].getAttribute('name');
    if (nameVal !== null) {
        if (nameVal.indexOf('description') !== -1) {
            headData[i].setAttribute('content', description);
        }
        // OGP(twitter)の設定
        if (nameVal.indexOf('twitter:title') !== -1) {
            headData[i].setAttribute('content', title);
        }
        if (nameVal.indexOf('twitter:description') !== -1) {
            headData[i].setAttribute('content', description);
        }
    }
}

const Index = () => {
    return(
        <React.Fragment>
            <SignOut />
            <Posts />
        </React.Fragment>
    );
}

export default Index;