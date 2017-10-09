import React, { Component } from "react";
import reactImg from './react.png'

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Webpack 3 starter</h1>
                <span>App</span>
                <img src={reactImg} alt='react image' />
            </div>
        );
    }
}

export default App;