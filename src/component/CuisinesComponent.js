import React, { Component } from 'react';

class CuisinesComponent extends Component {
    render() {
        return (
            <div className="image-eat image-1" style={{ backgroundImage: `url(${this.props.data.image})` }}>
                <div className="p-title">
                    <span className="sp-eat">{this.props.data.title}</span>
                    <h4 className="heading-4">{this.props.data.name}</h4>
                </div>
            </div>
        );
    }
}

export default CuisinesComponent;