import { useKeycloak } from '@react-keycloak/web';
import { Navigate } from 'react-router';
import styles from './chat.module.scss';
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from 'react';
import Picker from 'emoji-picker-react';
import {io} from 'socket.io-client';

/* eslint-disable-next-line */
export interface ChatProps {}
const socket =  io("http://localhost:3333/channel", {transports: ['websocket']});

export function Chat(props) {
  const currentUser = localStorage.getItem('currentUser');
  const { keycloak, initialized } = useKeycloak();
  //socket

  

  //socket end


  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [messages, setMessages] = useState([]);
  const [channels, setChannels] = useState([]);
  const bottomRef = useRef(null);

  const [selectedChannel, setSelectedChannel] = useState(null);
  const [previosChannel, setPreviosChannel] = useState(null);
  const [input, setInput] = useState(props?.value ?? '');

  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject);
  };
  async function fetchChannels(userId: string) {
    const response: any = await fetch(
      `http://localhost:3333/api/user/${currentUser}/channels`
    );
    const fetchedEmployees = await response.json(response);
    setChannels(fetchedEmployees);
    console.log(fetchedEmployees);
  }
  async function fetchMessages(channelId: string) {
    const response: any = await fetch(
      `http://localhost:3333/api/message/channel/${channelId}`
    );
    const fetchedMessages = await response.json(response);
    setMessages(fetchedMessages);
    bottomRef.current?.scrollIntoView({behavior: 'smooth', block: "end"});


  }



  useEffect(() => {
    fetchChannels(currentUser);
    socket.on('channelToClient', (msg) => {
     // console.log('msg', msg);
      receiveChatMessage(msg.message);
    });
   
  }, []);
  function receiveChatMessage(msg: any) {
    console.log('msg', messages);
    setMessages((messages)=>[...messages, msg]);
    console.log('afet msg', messages);
    bottomRef.current?.scrollIntoView({behavior: 'smooth', block: "end"});

  }
  function sendChatMessage() {
    socket.emit('sendMessage', { sender: currentUser, channel: selectedChannel._id, message: 
      {
            "content":input,
            "from":currentUser,
            "to":selectedChannel.members.filter(user => user!==currentUser)[0],
            "channelId": selectedChannel._id,
        
    }
    });
    bottomRef.current?.scrollIntoView({behavior: 'smooth', block: "end"});

    console.log('input',input);
  }

  useEffect(() => {
     if (selectedChannel) {
      socket.emit('leaveChannel', { channel: selectedChannel._id });
      fetchMessages(selectedChannel._id);
      socket.emit('joinChannel', { channel: selectedChannel._id });
     }

    console.log('selected channel',selectedChannel);
  }, [selectedChannel]);

  if (!initialized) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles['container']}>
      {keycloak.authenticated ? (
        <div>
          <div>
            <div className="container-fluid">
              <div className="row g-0">
                <div className="col-12 col-lg-5 col-xl-3 border-right">
                  <div className="px-4 d-none d-md-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        <input
                          type="text"
                          className="form-control my-3"
                          placeholder="Search..."
                        />
                      </div>
                    </div>
                  </div>
                  {/* channel list */}
                  {channels.map((channel) => (
                    <div key={channel.id}
                      onClick={() => setSelectedChannel(channel)}
                    >
                                        <div
                    className="list-group-item list-group-item-action border-0"
                    style={{
                      padding: '10px',
                      boxShadow: '0 1px 1px -1px gray',
                    }}
                  >
                    <div className="badge bg-success float-right">5</div>
                    <div className="d-flex align-items-start">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                        className="rounded-circle mr-1"
                        alt="Vanessa Tucker"
                        width="40"
                        height="40"
                      />
                      <div
                        className="flex-grow-1 ml-3"
                        style={{ marginLeft: '10px' }}
                      >
                        {channel ? channel.members.filter(user => user!=currentUser): ""}
                        <div className="small">
                          <span className="fas fa-circle "></span> Online
                        </div>
                      </div>
                    </div>
                  </div>
                      
                      </div>
                    ))}
         

            
                  <hr className="d-block d-lg-none mt-1 mb-0" />
                </div>
                <div className="col-12 col-lg-7 col-xl-9 shadow-sm">
                  <div className="py-2 px-4 border-bottom d-none d-lg-block">
                    <div className="d-flex align-items-center py-1">
                    {selectedChannel ?  <div className="position-relative">
                        <img
                          src={`https://bootdey.com/img/Content/avatar/avatar${ Math.floor(Math.random() * (5 - 1 )+1)}.png`}
                          className="rounded-circle mr-1"
                          alt="Sharon Lessman"
                          width="40"
                          height="40"
                        />
                      </div>: ""}
                     
                      <div
                        className="flex-grow-1 pl-3"
                        style={{ marginLeft: '10px' }}
                      >
                        <strong>{selectedChannel ? selectedChannel.members.filter(user => user!=currentUser): ""}</strong>
                        <div className="text-muted small">
                          <em></em>
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-link text-muted"
                        >
                          <i className="fa fa-fw fa-phone">Info</i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative">
                    <div
                      className="chat-messages p-4"
                      style={{ height: '80vh' }}
                    >
                      {messages===undefined ||messages===null || messages.length===0  ?"please select a channel": ""}
                      {messages.map((message) => (
                        <div key={message.id}>
                          <div className={`chat-message-${message.from==currentUser? "right":"left"} pb-4`}>
                            <div>
                              <img
                                src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                className="rounded-circle mr-1"
                                alt="Chris Wood"
                                width="40"
                                height="40"
                              />
                              <div className="text-muted small text-nowrap mt-2">
                                2:33 am
                              </div>
                            </div>
                            <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                              <div className="font-weight-bold mb-1">
                                {message.from}
                              </div>
                              {message.content}
                            </div>
                          </div>
                        </div>
                      ))
                        
                      }
                
                     {/* end message */}
                    
                  
                
                

 
                     
                  
                     <div className='chat-message-right' ref={bottomRef} />


                    </div>

                  </div>

                  <div className="flex-grow-0 py-3 px-4 border-top">
                    <div className="input-group">
                      <input
                        id={'id'}
                        value={input} onInput={(e:any) => setInput(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Type your message"
                      />
                      <button onClick={sendChatMessage} className="btn btn-primary">Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

export default Chat;

 

