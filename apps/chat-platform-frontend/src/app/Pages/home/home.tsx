import { useKeycloak } from '@react-keycloak/web';
import { useEffect } from 'react';
import { Navigate, redirect } from 'react-router';
import styles from './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const { keycloak } = useKeycloak();
  
  return (
    <div className={styles['container']}>
         {keycloak.authenticated ? (<div>
          <h1>Welcome to Home!</h1>
            </div>) : (<div>
              <Navigate to="/login" replace />
            </div>)}

    </div>
  );
}

export default Home;
