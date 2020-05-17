import React from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../Firebase';
import { useCollectionData } from "react-firebase-hooks/firestore";

const Index = () => {
    const [ list, loading, error ] = useCollectionData(db.collection('users'), { idField: 'docId' });
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error...</div>;

    const result = Object.keys(list).length;

    return (
        <React.Fragment>
            <h2>FireStore Users (Count: {result}posts)</h2>

            {list.map(item => (
                <div className="user-list" key={item.docId + String(new Date())}>
                    <div className="inner-user-list">
                        <div className="user-text">
                            <div className="user-name">{item.name}</div>
                            <div className="user-email">{item.email}</div>
                        </div>
                        <button>
                            <Link className="detail-button" to={`/users/Detail/${item.docId}`}>detail</Link>
                        </button>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
}

export default Index;