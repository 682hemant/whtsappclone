import React ,{useEffect} from 'react';
import './Sidebar';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './chat';
import Pusher from 'pusher-js'; 

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
