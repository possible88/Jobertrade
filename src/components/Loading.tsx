import React from "react";
import '../style.css'; // Import your CSS file here

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;