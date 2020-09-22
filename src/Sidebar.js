import React, { useState } from 'react'
import './sidebar.css'
import SideBarChat from './SideBarChat'
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons"
import {connect} from 'react-redux';
import {serchFilter} from './redux/actions/AddMessege'

function Sidebar(props) {
  const [search, setSearch] = useState('');

  const searchHandler =(event)=>{
   setSearch(event.target.value);
    props.dispatch(serchFilter(search));
  }
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR2DzgNtmdtG9ETl9jNZ4p5EvrOqugaNM_JGg&usqp=CAU' />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input
            placeholder="Search por start a new chat"
            type="chat"
            value={search}
            onChange={searchHandler}/>
        </div>
      </div>
      <div className="sideBar_chats">
        <SideBarChat />
      </div>
    </div>
  )
}

export default connect()(Sidebar)
