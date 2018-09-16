import React from 'react';
import ReactDOM from 'react-dom';

//Componenets
import Header from './components/header'

const App = () =>{

    return (
        <div>
            <Header/>
        </div>
    )
    //return React.createElement('h1',{className:'title'},'Hello world!!!',React.createElement('div'))
}


ReactDOM.render(<App/>,document.querySelector('#root'));