import React, { useState, useEffect } from 'react';
import AppContext from './lib/app-context';
import parseRoute from './lib/parse-route';
import decodeToken from './lib/decode-token';
import Auth from './pages/auth';
import Home from './pages/home';
import NotFound from './pages/not-found';
import Navbar from './components/navbar';
import PageContainer from './components/page-container';

export default function App() {
  const [user, setUser] = useState(null);
  const [isAuthorizing, setAuthorizing] = useState(true);
  const [route, setRoute] = useState(parseRoute(window.location.hash));

  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setRoute(parseRoute(window.location.hash));
    });
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? decodeToken(token) : null;
    setUser(user);
    setAuthorizing(false);
  });

  const handleSignIn = result => {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    setUser(user);
  };

  const handleSignOut = () => {
    window.localStorage.removeItem('react-context-jwt');
    setUser(null);
  };

  const renderPage = () => {
    const path = route.path;
    if (path === '') {
      return <Home />;
    }
    if (path === 'sign-in' || path === 'sign-up') {
      return <Auth />;
    }
    return <NotFound />;
  };

  if (isAuthorizing) return null;
  const contextValue = { user, route, handleSignIn, handleSignOut };
  return (
    <AppContext.Provider value={contextValue}>
      <>
        <Navbar />
        <PageContainer>
          { renderPage() }
        </PageContainer>
      </>
    </AppContext.Provider>
  );
}
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//       isAuthorizing: true,
//       route: parseRoute(window.location.hash)
//     };
//     this.handleSignIn = this.handleSignIn.bind(this);
//     this.handleSignOut = this.handleSignOut.bind(this);
//   }

//   componentDidMount() {
//     window.addEventListener('hashchange', () => {
//       this.setState({
//         route: parseRoute(window.location.hash)
//       });
//     });
//     const token = window.localStorage.getItem('react-context-jwt');
//     const user = token ? decodeToken(token) : null;
//     this.setState({ user, isAuthorizing: false });
//   }

//   handleSignIn(result) {
//     const { user, token } = result;
//     window.localStorage.setItem('react-context-jwt', token);
//     this.setState({ user });
//   }

//   handleSignOut() {
//     window.localStorage.removeItem('react-context-jwt');
//     this.setState({ user: null });
//   }

//   renderPage() {
//     const { path } = this.state.route;
//     if (path === '') {
//       return <Home />;
//     }
//     if (path === 'sign-in' || path === 'sign-up') {
//       return <Auth />;
//     }
//     return <NotFound />;
//   }

//   render() {
//     if (this.state.isAuthorizing) return null;
//     const { user, route } = this.state;
//     const { handleSignIn, handleSignOut } = this;
//     const contextValue = { user, route, handleSignIn, handleSignOut };
//     return (
//       <AppContext.Provider value={contextValue}>
//         <>
//           <Navbar />
//           <PageContainer>
//             { this.renderPage() }
//           </PageContainer>
//         </>
//       </AppContext.Provider>
//     );
//   }
// }
