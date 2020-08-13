import React from 'react';
import './App.css';
import {UserProvider} from "./fp/UserContext"
import Apps from "./fp/Apps"

function App() {
  return (
    <>
    <UserProvider>
      <Apps/>
    </UserProvider>
    </>
  );
}

export default App;
