# [React実践編]Reactで「SNS風投稿アプリ」つくってみたよ

JavascriptのライブラリであるReact.jsとGoogleのサービスFirebaseを利用して「SNS風投稿アプリ」を作ってみました。

デザインテイストは2020年のトレンドデザインと謳われている"Neumorphism"を採用。

## コア機能
- Firebase Authenticationでユーザー認証(メール認証、Twitter認証、Google認証)

- そのサインインユーザーでコメント投稿

## データダウンロード&構築

```bash
$ git clone https://github.com/dai-570415/react-crud-neumorphism.git

$ cd react-crud-neumorphism

$ npm install

$ npm start
```

```js:Firebase.js
// Firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 各自のAPIキーを入れる
const firebaseConfig = {
    apiKey: "Your_Key",
    authDomain: "Your_Key",
    databaseURL: "Your_Key",
    projectId: "Your_Key",
    storageBucket: "Your_Key",
    messagingSenderId: "Your_Key",
    appId: "Your_Key",
    measurementId: "Your_Key"
};

firebase.initializeApp(firebaseConfig);

export const providerFacebook = new firebase.auth.FacebookAuthProvider();
export const providerGoogle = new firebase.auth.GoogleAuthProvider();
export const providerTwitter = new firebase.auth.TwitterAuthProvider();
export const db = firebase.firestore();
export default firebase;
```

以上でFirebase Authenticationに連携できるかと思います。