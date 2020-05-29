import React from 'react';
import './assets/css/App.css';
import './assets/css/NeumoForm.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// components
import Index from './components/Index';
// components/posts
import PostIndex from './components/posts/Index'
// components/user
import UserIndex from './components/user/index'
// components/elements
import Header from './components/elements/Header';
import Footer from './components/elements/Footer';

// Auth パターン1
// components/FirebaseAuth
// import Auth from './components/FirebaseAuth/Auth';
// import SignIn from './components/FirebaseAuth/SignIn';
// import SignUp from './components/FirebaseAuth/SignUp';
// import Profile from './components/FirebaseAuth/Profile';
// import Home from './components/FirebaseAuth/Home';

// Auth パターン2
// components/FirebaseAuthHook
import PrivateRoute from './components/FirebaseAuthHook/PrivateRoute';
import { AuthProvider } from './components/FirebaseAuthHook/AuthProvider';
import SignInHook from './components/FirebaseAuthHook/Signin';
import SignUpHook from './components/FirebaseAuthHook/Signup';

const title = 'ReactとFirebase製SNSアプリ | BlurryChat';
const description = 'こちらは、ReactとFirebaseを連携してSNSのような投稿することができるアプリサンプルです。';

// head情報
document.title = title;
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
// ここまでhead情報

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <div className="contents">
          <main>
            {/* Auth パターン1 */}
            {/* <Switch>
              <Route exact path="/dashboard" component={ Index } />
              <Route exact path="/users/Detail/:uid" component={ UserDetail } />
              <Route exact path="/signin" component={ SignIn } />
              <Route exact path="/signup" component={ SignUp } />
              <Auth>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/profile" component={ Profile } />
                  <Route render={ () => <p>Not Found</p> } />
                </Switch>
              </Auth>
            </Switch> */}
            
            {/* Auth パターン2 */}
            <AuthProvider>
              <Switch>
                <PrivateRoute exact path="/" component={ Index } />
                <PrivateRoute exact path="/posts/" component={ PostIndex } />
                <PrivateRoute exact path="/user/" component={ UserIndex } />
                <Route exact path="/signin_hook" component={ SignInHook } />
                <Route exact path="/signup_hook" component={ SignUpHook } />
              </Switch>
            </AuthProvider>
          </main>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;