import { useKeycloak } from '@react-keycloak/web';
import { Navigate } from 'react-router';
import styles from './chat.module.scss';
import EmojiPicker from 'emoji-picker-react';
import { useEffect,useState } from 'react';
import Picker from 'emoji-picker-react';

/* eslint-disable-next-line */
export interface ChatProps {}

export function Chat(props: ChatProps) {
  const { keycloak , initialized} = useKeycloak();
  
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const [messages, setMessages] = useState([]);
  const [channels, setChannels] = useState([]);
  
  const onEmojiClick = (event:any, emojiObject:any) => {
    setChosenEmoji(emojiObject);
  };

  useEffect(() => {
    fetch(`http://localhost:3333/api/user/${"keshim95"}/channels`)
      .then((response) => setChannels([response]))
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3333/api/message/channel/${"638c913154d3e030a2428258"}`)
      .then((response) => console.log(response.json()))
      .then((data) => console.log(data));
  }, []);


  if (!initialized) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles['container']}>
     {keycloak.authenticated ? (<div>
    
    <div>

<div className="container-fluid" >
  <div className="row g-0">
    <div className="col-12 col-lg-5 col-xl-3 border-right">

      <div className="px-4 d-none d-md-block">
        <div className="d-flex align-items-center">
          <div className="flex-grow-1">
            <input type="text" className="form-control my-3" placeholder="Search..."/>
          </div>
        </div>
      </div>
// channel list startet 
      <div className="list-group-item list-group-item-action border-0" style={{ padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="badge bg-success float-right">5</div>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Vanessa Tucker" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            Vanessa Tucker
            <div className="small"><span className="fas fa-circle "></span> Online</div>
          </div>
        </div>
      </div>
      <div  className="list-group-item list-group-item-action border-0" style={{ padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="badge bg-success float-right">2</div>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="William Harris" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            William Harris
            <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
          </div>
        </div>
      </div>
      <div className="list-group-item list-group-item-action border-0" style={{ padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            Sharon Lessman
            <div className="small"><span className="fas fa-circle chat-online"></span> Online</div>
          </div>
        </div>
      </div>
      <div  className="list-group-item list-group-item-action border-0" style={{ padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Christina Mason" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            Christina Mason
            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
          </div>
        </div>
      </div>
      <div  className="list-group-item list-group-item-action border-0" style={{ padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar5.png" className="rounded-circle mr-1" alt="Fiona Green" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            Fiona Green
            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
          </div>
        </div>
      </div>
      <div className="list-group-item list-group-item-action border-0" style={{padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar2.png" className="rounded-circle mr-1" alt="Doris Wilder" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            Doris Wilder
            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
          </div>
        </div>
      </div>
      <div  className="list-group-item list-group-item-action border-0" style={{ padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar4.png" className="rounded-circle mr-1" alt="Haley Kennedy" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            Haley Kennedy
            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
          </div>
        </div>
      </div>
      <div  className="list-group-item list-group-item-action border-0" style={{ padding: '10px', boxShadow: '0 1px 1px -1px gray' }}>
        <div className="d-flex align-items-start">
          <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Jennifer Chang" width="40" height="40"/>
          <div className="flex-grow-1 ml-3" style={{ marginLeft: '10px' }}>
            Jennifer Chang
            <div className="small"><span className="fas fa-circle chat-offline"></span> Offline</div>
          </div>
        </div>
      </div>

       // end channel

      <hr className="d-block d-lg-none mt-1 mb-0"/>
    </div>
    <div className="col-12 col-lg-7 col-xl-9 shadow-sm"  >
      <div className="py-2 px-4 border-bottom d-none d-lg-block" >
        <div className="d-flex align-items-center py-1" >
          <div className="position-relative" >
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
          </div>
          <div className="flex-grow-1 pl-3" style={{ marginLeft: '10px' }}>
            <strong>Secound User</strong>
            <div className="text-muted small"><em>Typing...</em></div>
          </div>
          <div>
            <button type="button" className="btn btn-link text-muted"><i className="fa fa-fw fa-phone">Info</i></button>
          </div>
        </div>
      </div>
      <div className="position-relative">
        <div className="chat-messages p-4" style={{ height: '80vh' }}>
//start message 
          <div className="chat-message-right pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:33 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div className="font-weight-bold mb-1">You</div>
              Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
            </div>
          </div>
//ende message 

          <div className="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:34 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
              <div className="font-weight-bold mb-1">Sharon Lessman</div>
              Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
            </div>
          </div>

          <div className="chat-message-right mb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:35 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div className="font-weight-bold mb-1">You</div>
              Cum ea graeci tractatos.
            </div>
          </div>

          <div className="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:36 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
              <div className="font-weight-bold mb-1">Sharon Lessman</div>
              Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
              Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
            </div>
          </div>

          <div className="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:37 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
              <div className="font-weight-bold mb-1">Sharon Lessman</div>
              Cras pulvinar, sapien id vehicula aliquet, diam velit elementum orci.
            </div>
          </div>

          <div className="chat-message-right mb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:38 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div className="font-weight-bold mb-1">You</div>
              Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
            </div>
          </div>

          <div className="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:39 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
              <div className="font-weight-bold mb-1">Sharon Lessman</div>
              Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
            </div>
          </div>

          <div className="chat-message-right mb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:40 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div className="font-weight-bold mb-1">You</div>
              Cum ea graeci tractatos.
            </div>
          </div>

          <div className="chat-message-right mb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:41 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div className="font-weight-bold mb-1">You</div>
              Morbi finibus, lorem id placerat ullamcorper, nunc enim ultrices massa, id dignissim metus urna eget purus.
            </div>
          </div>

          <div className="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:42 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
              <div className="font-weight-bold mb-1">Sharon Lessman</div>
              Sed pulvinar, massa vitae interdum pulvinar, risus lectus porttitor magna, vitae commodo lectus mauris et velit.
              Proin ultricies placerat imperdiet. Morbi varius quam ac venenatis tempus.
            </div>
          </div>

          <div className="chat-message-right mb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" className="rounded-circle mr-1" alt="Chris Wood" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:43 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
              <div className="font-weight-bold mb-1">You</div>
              Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.
            </div>
          </div>

          <div className="chat-message-left pb-4">
            <div>
              <img src="https://bootdey.com/img/Content/avatar/avatar3.png" className="rounded-circle mr-1" alt="Sharon Lessman" width="40" height="40"/>
              <div className="text-muted small text-nowrap mt-2">2:44 am</div>
            </div>
            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
              <div className="font-weight-bold mb-1">Sharon Lessman</div>
              Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.
            </div>
          </div>

        </div>
      </div>

      <div className="flex-grow-0 py-3 px-4 border-top">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Type your message"/>
          <button className="btn btn-primary">Send</button>
          
        </div>

      </div>

    </div>
  </div>
</div>

    </div>
    
       </div>) : (<div>
         <Navigate to="/login" replace />
       </div>)} 
</div>
  );
}

export default Chat;
