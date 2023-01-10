import styles from './login.module.scss';
import { useKeycloak } from '@react-keycloak/web';
import { Navigate, redirect } from 'react-router';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const { keycloak, initialized } = useKeycloak();
  
if (!initialized) {
    return <div>Loading...</div>;
  }


  return (
   
      <div className="container">
        <div className="row">
          <div  className="col-4">
            <div className="justify-content-center">
            <h1 className={""}>Welcome to Login!</h1>
            <img className={styles['img-center']} src="assets/vector_chat.jpg" alt="logo" />
           
            {keycloak.authenticated ? (<div>
              <Navigate to="/home" replace />
              <button onClick={() => {keycloak.logout()}} className="btn btn-outline-success">
              Logout
            </button>     
            </div>
              ) : (
                <button onClick={() => {keycloak.login(); redirect('/home')}} className="btn btn-outline-success">
                Login
              </button>        )}
            </div>
          </div>
        </div>
      </div>
   
  );
}

export default Login;
