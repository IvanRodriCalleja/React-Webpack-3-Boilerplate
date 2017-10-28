
import React, { Component } from 'react';

class Icon extends Component {
    render() {
        const { className, svgIcon, title, description } = this.props;
        return (
            <svg className={ className } viewBox={ svgIcon.viewBox } role='img'>
                <use role='presentation' xlinkHref={ svgIcon.url } />
            </svg>
        );
    }
}

export default Icon;