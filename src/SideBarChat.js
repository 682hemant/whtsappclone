import React from 'react'
import './SideBarChat.css'
import { Avatar } from '@material-ui/core';
import { connect } from 'react-redux';

function SideBarChat(props) {
  return (
    <div className="sidebarChat">
       <Avatar />
       {props.users.map(user=><div className="sidebarChat__info">
       <h2>{user.name}</h2>
       <p>{user. lastMesege}</p>
     </div>)}
       

    </div>
  )
}
const mapStateToProps=state=>{
  return{
    users:state.user.user
  }
}

export default connect(mapStateToProps)(SideBarChat)
