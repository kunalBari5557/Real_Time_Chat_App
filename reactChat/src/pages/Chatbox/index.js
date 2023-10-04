import { IconButton } from '@mui/material';
// import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

const Chatbox = () => {
    const client = new W3CWebSocket(`${process.env.REACT_APP_WEBSOCKET_URL}`);

    const Employer_Token = localStorage.getItem('Employer_Token');
    const [Show, setShow] = useState("");
    const [message, setMessage] = useState("");
    const [users_all_msg, setUsersAllMsg] = useState([]);
    const [userGroupMessages, setUserGroupMSg] = useState(false);
    const [groups, setGroupList] = useState([]);
    const [user_msg_count, setUser_Msg_Count] = useState(0);
    const [candidate_search, setCandidate_Search] = useState("");

    //  Start The WebSocket Server
    useEffect(() => {
        client.onopen = () => {
            if (client.readyState === 1) {
                client.send(JSON.stringify({
                    "action": "groupList",
                    "groupId": localStorage.getItem('groupId'),
                    "userId": localStorage.getItem('userId')
                }));
            }
        }
    }, []);

    client.onmessage = (message) => {
        var obj = JSON.parse(`${message.data}`);

        if (obj.action === "groupList") {
            setGroupList(obj.groups);
            setUser_Msg_Count(obj?.lastCandidateMsgCount);

        } else if (obj.action === "group_all_msg") {

            setUsersAllMsg(obj.messages);

        } else if (obj.action === 'users_send_msg') {

            setTimeout(() => {
                if (client.readyState === 1) {
                    client.send(JSON.stringify({
                        "action": "group_all_msg",
                        "groupId": localStorage.getItem('groupId'),
                        "userId": localStorage.getItem('userId')
                    }));
                }
            }, 100);


        }
    };

    const Send_Message = (e) => {
        e.preventDefault();
        if (message !== "" && client.readyState === 1) {
            client.send(JSON.stringify({
                "action": "users_send_msg",
                "type": "E_Type",
                "messages": message,
                "userId": localStorage.getItem('userId'),
                "groupId": localStorage.getItem('groupId')
            }));

            setMessage("");

        }
    }

    useEffect(() => {
        var Height = document.getElementById('employer_message_container')?.scrollHeight;
        $('#employer_message_container').animate({ scrollTop: Height });
    }, [users_all_msg, message]);

    const OpenChatList = () => {
        if ($("#myDiv").hasClass("user-list-box-show")) {
            $("#myDiv").removeClass("user-list-box-show");
        } else {
            $("#myDiv").addClass("user-list-box-show");
        }
    }

    const HandleShowChat = (data) => {
        setUserGroupMSg(true)

        if (client.readyState === 1) {
            client.send(JSON.stringify({
                "action": "group_all_msg",
                "groupId": localStorage.getItem('groupId'),
                "userId": localStorage.getItem('userId'),
            }));
        }

        var d = document.getElementById(`${data.id + '-' + data.employer_id}`);
        if (d) {
            d.style.display = "none";
        }

        $("#myDiv").removeClass("user-list-box-show");
    }

    const GetCount=(item)=>{
            
          if(localStorage.getItem('groupId')===item){
            if (user_msg_count > 0) {
                return `<span id="${item._id}" class="badge badge-primary rounded-pill px-2" style="position: absolute; top: 20%; right: 20%;">${user_msg_count}</span>`;
              } else {
                return ''; // Return an empty string if user_msg_count is not greater than 0
              }
          }else{
            return false;
          }
    }

    return (
        <>
            <div className='w-100'>
                <div className="layout-px-spacing">
                    <div className="chat-section layout-top-spacing">
                        <div className="chat-system">
                            <div className="hamburger" onClick={OpenChatList}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu mail-menu d-lg-none"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg></div>
                            <div className="user-list-box" id='myDiv'>
                                <div className="search">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                    <input type="text" className="form-control" placeholder="Search" value={candidate_search} onChange={(e) => setCandidate_Search(e.target.value)} />
                                </div>
                                <div className="people overflow-scrolled">
                                    {
                                        groups.map((item, i) => (
                                            <div className={`person ${(item.name) && "active_chat_user"}`} key={i} onClick={() => HandleShowChat(item)} id={`active_msg_${item.name}`}>
                                                <div className="user-info">
                                                    <div className="f-head">
                                                        <img src="/assets/img/90x90.jpg" alt="avatar" />
                                                    </div>
                                                    <div className="f-body">
                                                        <div className="meta-info">
                                                            <span className="user-name" data-name="Nia Hillyer">{item.name}</span>
                                                            {/* <span className="user-meta-time">2:09 PM</span> */}
                                                        </div>
                                                        {/* <span className="preview">{item._id}</span> */}
                                                        {GetCount(item._id)}
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="chat-box">
                                {!userGroupMessages ?
                                    <div className="chat-not-selected">
                                        <p> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg> Click User To Chat</p>
                                    </div>
                                    :
                                    <div className="chat-box-inner h-100">
                                        <div className="chat-meta-user chat-active">
                                            <div className="current-chat-user-name">
                                            </div>
                                        </div>

                                        <div className="chat-conversation-box ps overflow-scrolled" style={{ paddingBottom: 55 }} id='employer_message_container'>

                                            <div className="chat active-chat">

                                                {users_all_msg.map((item, i) => (
                                                    <React.Fragment key={i}>
                                                        {item.userId === localStorage.getItem('userId') ?
                                                            <div className="bubble me">{item.messages}</div>
                                                            :
                                                            <div className="bubble you">{item.messages}</div>
                                                        }
                                                    </React.Fragment>

                                                ))}
                                            </div>
                                        </div>

                                        <div className="chat-footer chat-active" style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                                            <div className="chat-input">
                                                <form className="chat-form" onSubmit={Send_Message}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-square"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                                    <input type="text" className="mail-write-box form-control" value={message} onChange={(e) => setMessage(e.target.value.trimStart())} placeholder="Message" />
                                                </form>
                                            </div>
                                            <IconButton aria-label="send" onClick={Send_Message} style={{ position: 'absolute', top: 10, right: 15 }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                                            </IconButton>
                                        </div>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chatbox