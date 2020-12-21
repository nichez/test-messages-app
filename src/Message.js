import React from "react";

const Message = (props) => {
  return (
    <div className="message">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <p>{props.user}</p>
    </div>
  );
};

export default Message;
