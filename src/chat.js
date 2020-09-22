import React,{useState} from 'react'
import './chat.css';
import { Avatar } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { IconButton } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import {addMesseges} from './redux/actions/AddMessege'
import { connect } from 'react-redux';
import Messeges from './Messeges';
import {deleteMessege} from './redux/actions/AddMessege'

const Chat = (props) => {
  const [messege,setMessege] = useState('');


  const onchangemessegs=(event)=>{
    setMessege(event.target.value);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
  }
  const addMessege=()=>{
     props.dispatch(addMesseges(messege))
     setMessege('');
  }
  const ondeleMessege=(Id)=>{
    props.dispatch(deleteMessege(Id))
  }
  
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3> love</h3>
          <p> Last seen at....</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">sonny</span>
          <span className="chat__timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
          {props.chatmessege.map(chat =><Messeges 
            chat={chat.chat} 
            delete={chat.isDeleted}
            clicked={()=>ondeleMessege(chat.id)}
           
             />)}
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form onSubmit={handleSubmit}>
          <input placeholder="type a messege" type="text" value={messege} onChange={onchangemessegs} />
          <button type="submit" onClick={addMessege}>
            send a messege
        </button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    chatmessege: state.cht.messege,
    messegerecieved: state.cht.messegeRecieved,
    
  }
}
export default connect(mapStateToProps)(Chat);
