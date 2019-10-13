import React from 'react';
import ReactDOM from 'react-dom';



class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            btncolor: "blue"
        }
        
    }
    updateCount() {
        this.setState(prevState => ({
            count: prevState.count + 1
        }));
    }

    checkCount() {
        if (this.state.count >= 15) {
            this.setState ({
                btncolor: "red"
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} !</h1>
                <button
                    onClick={
                        () => {
                            this.updateCount();
                            this.checkCount();
                        }
                    } 
                    style={{color: this.state.btncolor}}>Click Me
                </button>
                <p>You clicked me {this.state.count} times</p>
            </div>
        )
    }
}

export default Counter