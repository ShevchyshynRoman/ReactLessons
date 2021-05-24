import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Profile Data
const PostData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 3},
    {id: 2, message: 'It\'s my first post', likesCount: 7}
]
//DialogsData
const dialogs = [
    {id: 1, name: 'Mykhailo'},
    {id: 2, name: 'Roman'},
    {id: 3, name: 'Danilo'},
    {id: 4, name: 'Anton'},
    {id: 5, name: 'Vasyl'},
]
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'You are welcome!'}
]

ReactDOM.render(
    <React.StrictMode>
        <App PostData={PostData}
             dialogs={dialogs}
             messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
