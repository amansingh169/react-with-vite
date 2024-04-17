import Agent from "./Agent"
import React from 'react';

const AgentsBox = ({ list }) => {
  return (
    <div className="agents-container">
      {list.map((agent, index) => (
        <Agent key={index} agent={agent} />
      ))}
    </div>
  )
}

export default AgentsBox