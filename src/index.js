import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from'./Contaner/App';
// import CardList from './Component/CardLIst';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




// npm run build : it make a package which is helps us to gather information about this ptoject 
// {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].enail} /> */}