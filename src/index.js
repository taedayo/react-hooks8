import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const userInfo = {
  name: "田中太郎",
  age: 24,
  address: "大阪府四条畷市",
};

const UserInfoContext = createContext(userInfo);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserInfoContext.Provider value={userInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserInfoContext.Provider>
);

export {UserInfoContext};
