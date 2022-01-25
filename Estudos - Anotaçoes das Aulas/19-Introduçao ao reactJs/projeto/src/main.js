import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';


function App(){
    return(
        <div>
            <h1>
                Meu Primeiro test com o React!
            </h1>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);

