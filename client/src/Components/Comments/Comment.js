import React from 'react';

export default function Comment(props) {
  const { name, message } = props.comment;

  return (
    <div>
      <div>
        <h6>{name}</h6>
        {message}
      </div>
    </div>
  );
}
