import React from 'react';
import './App.css';
import {UserProvider} from "./fp/UserContext"
import {EditProvider} from "./fp/EditContext"
import Apps from "./fp/Apps"

function App() {
  return (
    <>
    <UserProvider>
      <EditProvider>
        <Apps/>
      </EditProvider>
    </UserProvider>
    </>
  );
}

export default App;
