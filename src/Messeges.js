import React from 'react'
import './chat.css';


const Messeges = (props) => {
  console.log(props.isDelete);
  return (
    <div>
    {props.delete ?
      <p className="chat__message chat__reciever">
      <span className="chat__name"></span>
      this messege was deleted
      
    </p>
      :
    <div onClick={props.clicked} >
      <p className="chat__message chat__reciever">
        <span className="chat__name">hemant</span>
        {props.chat}
        <span className="chat__timestamp">
          {new Date().toUTCString()}
        </span>
      </p>
    </div>
    }
    </div>
  )
}

export default Messeges
