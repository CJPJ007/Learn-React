import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="9a375fb7-103c-41ee-9986-83352ff6cd8f"
        userName="jaypal"
        userSecret="jaypal"
        renderChatFeed={(chatProps)=>(<ChatFeed {...chatProps}></ChatFeed>)}
        onNewMessage = {()=>(new Audio("../resources/mixkit-click-melodic-tone-1129.wav").play())}
      />
    </div>
  );
}

export default App;
