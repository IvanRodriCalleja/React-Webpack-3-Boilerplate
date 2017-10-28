import React, { Component } from 'react';
import catImg from './cat.png';
import Icon from '../shared/icon/icon'
import employeeIcon from './icons/employee.svg';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Webpack 3 starter</h1>
                <span>App</span>
                <Icon svgIcon={employeeIcon} title='Employee Icon' />
                <img src={catImg} alt='react image' />
            </div>
        );
    }
}

export default App;