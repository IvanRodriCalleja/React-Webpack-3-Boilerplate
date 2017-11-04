import React, { Component } from 'react';
import catImg from './cat.png';
import Icon from '../shared/icon/icon'
import employeeIcon from './icons/employee.svg';
import appStyles from './app.scss';

class App extends Component {
    render() {
        return (
            <div>
                <h1>React Webpack 3 starter</h1>
                <span>App</span>
                <div className={ appStyles.flex }>
                    <div>A</div>
                    <div>B</div>
                    <div>C</div>
                </div>
                <Icon svgIcon={employeeIcon} title='Employee Icon' />
                <img src={catImg} alt='react image' className={ appStyles.img }/>
            </div>
        );
    }
}

export default App;