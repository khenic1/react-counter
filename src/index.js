import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter'


const App = () => {
    return (
        <Counter name="Howard" />
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


