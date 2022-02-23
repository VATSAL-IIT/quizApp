import React from 'react';
import './header.css'
import {Link,BrowserRouter} from 'react-router-dom'
const header = () => {
  return (
  <div className="header">
      <Link to="/" className="title">Quiz Hub</Link>
      <hr className="divider"></hr>
  </div>
  );
};

export default header;
