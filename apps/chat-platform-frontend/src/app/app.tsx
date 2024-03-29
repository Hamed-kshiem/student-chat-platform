// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Route, Routes, Link, redirect, RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import Login from './Pages/login/login';
import Home from './Pages/home/home';
import Chat from './Pages/chat/chat';

export function App() {
  const { keycloak, initialized } = useKeycloak();
                //    {JSON.stringify(username)}

  //const username = initialized? keycloak?.tokenParsed['preferred_username'] : null;
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">

            Navbar 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <div><Link className="nav-link " to={"/home"}>Home</Link></div>
              </li>
              <li>
                  <div><Link className="nav-link " to={"/chat"}>Chat</Link></div>

                  </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://github.com/Hamed-kshiem/student-chat-platform.git"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Github Repository
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <div className="dropdown-item">
                      https://github.com/Hamed-kshiem/student-chat-platform.git
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
              
              {keycloak.authenticated ? (
                <div>
                {localStorage.getItem('currentUser')}
                <button onClick={() => {keycloak.logout();}} className="btn btn-outline-success" style={{marginLeft:"10px"}}>
                Logout
              </button>     </div>     ) : (
                <button onClick={() => {keycloak.login()}} className="btn btn-outline-success" style={{marginLeft:"10px"}}>
                Login
              </button>        )}
          
          </div>
        </div>
      </nav>
      <Routes>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />}/>
        <Route path="chat" element={<Chat />}>

        <Route path="" element={<Navigate to="/" replace />} />

        </Route>
      </Routes>


      {/* END: routes */}
    </>
  );
}

export default App;
