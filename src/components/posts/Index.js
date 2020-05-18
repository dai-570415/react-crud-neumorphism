import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import firebase, { db } from '../../Firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";
import PostIcon from '../../assets/img/post.png';
import UserIcon from '../../assets/img/user.png';

const Index = () => {
    // react-hook-form
    const { register, handleSubmit, errors } = useForm();

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
        
    // Create
    const [msg, setMsg] = useState('');
    const [pending,setPending] = useState(false);
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    
    const OnSubmit = async () => {
        setMsg('');
        setPending(true);
        try {
            await firebase
                .firestore()
                .collection('posts')
                .add({
                    msg,
                    createdAt,
                    // 以下firebase.auth().currentUser情報
                    authId,
                    email,
                    name,
                    photoURL
                });
        } finally {
            setPending(false);
        }
    }
    
    // Render
    const [ list, loading, error ] = useCollectionData(db.collection('posts').orderBy('createdAt', 'desc'), { idField: 'docId' });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;
    // const result = Object.keys(list).length; // Countを数える

    // Delete
    const handleDelete = (uid) => {
        if (window.confirm('削除しますか？')) {
            db.collection('posts').doc(uid).delete();
        }
    }
    
    return (
        <React.Fragment>
            {/* コメントフォーム */}
            <form onSubmit={handleSubmit(OnSubmit)} className="form post-form">
                <div className="error">{errors.msg && 'メッセージが入力されていません'}</div>
                <input
                    className="post-input"
                    value={ msg }
                    onChange={ e => setMsg(e.target.value) }
                    placeholder="メッセージを入力..."
                    name="msg"
                    ref={register({ required: true })}
                />
                <button type="submit" className="post-button">
                    <img src={ PostIcon } alt="create" />
                </button>

                {name ? (
                    <Link to="/user" className="post-name">{ name }</Link>
                ) : (
                    <Link to="/user" className="post-name">Firebaseユーザー</Link>
                )}
                
                { pending && 'Pendeing...' }
                
                
            </form>

            {/* 吹き出し表示 左右切り分け */}
            <div className="post-list">
                {list.map(item => (
                    <div key={item.docId + String(new Date())}>
                    {authId === item.authId ? (
                        <div className="auth-inner-post-list">
                            {item.photoURL ? (
                                <Link to="/user"><img src={ item.photoURL } className="auth-user-icon" alt="User Thumbnail" /></Link>
                            ) : (
                                <Link to="/user"><img src={ UserIcon } className="auth-user-icon" alt="Firebase Thumbnail" /></Link>
                            )}
                            <div className="auth-inner-post-text">
                                <div className="post-msg">{item.msg}</div>
                                <span className="delete"  onClick={() => handleDelete(item.docId)}>&gt; Delete...</span>
                                {item.name ? (
                                    <div className="post-name">{item.name}</div>
                                ) : (
                                    <div className="post-name">Firebaseユーザー</div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="inner-post-list">
                            {item.photoURL ? (
                                <img src={ item.photoURL } className="user-icon" alt="User Thumbnail" />
                            ) : (
                                <img src={ UserIcon } className="user-icon" alt="Firebase Thumbnail" />
                            )}
                            <div className="inner-post-text">
                                <div className="post-msg">{item.msg}</div>
                                {item.name ? (
                                    <div className="post-name">{item.name}</div>
                                ) : (
                                    <div className="post-name">Firebaseユーザー</div>
                                )}
                            </div>
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default Index;