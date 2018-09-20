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
    //return React.createElement('h1',{className:'title'},' H e l l o  w o r l d ! ! ! How are you guys? KO ',React.createElement('div'))
}


ReactDOM.render(<App/>,document.querySelector('#root'));
