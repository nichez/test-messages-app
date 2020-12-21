import React, { useState } from "react";
import "./App.css";
import Message from "./Message";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const toggleLogin = () => {
    setIsAuth((prevState) => !prevState);
  };

  return (
    <div className="app">
      <button type="button" className="btnLogin" onClick={toggleLogin}>
        {!isAuth ? "Login" : "Logout"}
      </button>
      {isAuth && (
        <div className="messageContainer">
          <Message
            title="Message Nikola"
            description="This is random message one."
            user="User Nikola"
          />
          <Message
            title="Message Two"
            description="This is test message two."
            user="User Two"
          />
        </div>
      )}
    </div>
  );
}

export default App;
