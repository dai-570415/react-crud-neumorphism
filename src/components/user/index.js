import React from 'react';
import { Link } from 'react-router-dom';
import firebase, { db } from '../../Firebase';
import SignOut from '../FirebaseAuthHook/SignOut';
import { useCollectionData } from "react-firebase-hooks/firestore";
import BackTopIcon from '../../assets/img/backtop.png';
import UserIcon from '../../assets/img/user.png';
import styled from 'styled-components';
import Nav from '../../components/elements/Nav';

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
    let name;
    let photoURL;
    if (user !== null) {
        user.providerData.forEach(() => {
            authId = user.uid;
            name = user.displayName;
            photoURL = user.photoURL;
        });
    }

    // Render
    const [ list, loading, error ] = useCollectionData(db.collection('posts').orderBy('createdAt', 'desc'), { idField: 'docId' });
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
     
    // auth userの投稿記事のみ抽出
    const result = list.filter((e) => {
        return e.authId === authId;
    });
    console.log(result);
    const length = result.length;
    console.log(length);
    

    // Delete
    const handleDelete = (uid) => {
        if (window.confirm('削除しますか？')) {
            db.collection('posts').doc(uid).delete();
        }
    }
        
    return(
        <section className="content">
            <Nav />
            <div className="post-page">
                <SignOut />
                <Link to="/"><BackTopStyle src={ BackTopIcon } alt="Topに戻る"/></Link>

                <div className="user-wrapper">
                    <div className="user">
                        {photoURL ? (
                            <img src={ photoURL } className="auth-user-icon" alt="User Thumbnail" />
                        ) : (
                            <img src={ UserIcon } className="auth-user-icon" alt="Firebase Thumbnail" />
                        )}
                        <div className="user-datail">
                            {name ? (
                                <div className="user-name-center">{name}</div>
                            ) : (
                                <div className="user-name-center">Firebaseユーザー</div>
                            )}
                        </div>
                    </div>

                    <div className="post-list user-post-list">
                    {length !== 0 ? (
                        <React.Fragment>
                            {result.map(item => (
                                <div key={item.docId + String(new Date())}>
                                    <div className="auth-inner-post-list">
                                        <div className="auth-inner-post-text">
                                            <div className="post-msg">{item.msg}</div>
                                            <span className="delete"  onClick={() => handleDelete(item.docId)}>削除...</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </React.Fragment>
                    ) : (
                        <div className="no-user-posts">まだ記事が投稿されていません</div>
                    )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;