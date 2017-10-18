
import React, { Component } from "react";

class Icon extends Component {
    render() {
        const { className, svgIcon, title, description } = this.props;
        const titleId = `title-${ svgIcon.id }`;
        const descriptionId = `desc-${ svgIcon.id }`;
        return (
            <svg className={ className } viewBox={ svgIcon.viewBox } role="img" aria-labelledby={ `${titleId} ${descriptionId}`}>
                <g>
                    <title id={ titleId }>{ title }</title>
                    <desc id={ descriptionId }>{ description }</desc>
                    <use role="presentation" xlinkHref={ svgIcon.url } />
                </g>
            </svg>
        );
    }
}

export default Icon;