import { useKeycloak } from '@react-keycloak/web';
import { useEffect, useState } from 'react';
import { Navigate, redirect } from 'react-router';
import styles from './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const { keycloak } = useKeycloak();
  const [allusers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
    setCurrentUser(localStorage.getItem('currentUser'));
  }, []);

  async function fetchUsers() {
    const response: any = await fetch(`http://localhost:3333/api/user`);
    const fetchedUsers = await response.json(response);
    setAllUsers(fetchedUsers);
    console.log(fetchedUsers);
  }
  function handleSelectedUser(user:any){
    setSelectedUser(user);
    if(selectedUser !== null){
      startChatIfNotExsists();
    }
  }



  async function startChatIfNotExsists() {
    const response: any = await fetch(
      `http://localhost:3333/api/channel/checkifchannelexists/${currentUser}/${selectedUser}`
    );
    const doeschannelexsists = await response.json(response);
    if(doeschannelexsists === false){
      const response: any = await fetch(
        `http://localhost:3333/api/channel`
        ,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "name": "string",
            "members": [
              currentUser,
              selectedUser
            ],
            "messages": [
            ]
          }),
        }
      );
      const createdchannel = await response.json(response);
      console.log(createdchannel);
      window.alert("channel created");
      redirect('/chat');
      window.location.replace("localhost:4200/chat");
      console.log(doeschannelexsists);
  }
  else{
    window.alert("channel exsists");
    window.location.replace("http://localhost:4200/chat");

  }
  }

  return (
    <div className={styles['container']}>
      {keycloak.authenticated ? (
        <div>
          <div className="row">
            {allusers.map((user,index) => (
              <div className="col-3">
                <div
                  className="card"
                  style={{ width: '18rem', marginBottom: '15px' , marginTop: '15px'}}
                  key={user.username}
                >
                  <div className="card-body">
                    <h5 className="card-title">{user.username}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {user.email}
                    </h6>
                    <button onClick={()=>{ handleSelectedUser(user.username) }} className="btn btn-success card-link">
                      Start chat
                    </button>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      ) : (
        <div>
          <Navigate to="/login" replace />
        </div>
      )}
    </div>
  );
}

export default Home;
