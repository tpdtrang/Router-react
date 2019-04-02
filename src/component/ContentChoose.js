import React, { Component } from 'react';

class ContentChoose extends Component {
    render() {
        return (
            <div className="col-lg-4">
                <div className="choose-social text-center">
                    <div className="p-icon">
                        <img className="icon-image" src={this.props.data.icon} alt="" />
                    </div>
                    <div className="p-title">
                        <h3 className="heading-3 dot-bottom">{this.props.data.title}</h3>
                    </div>
                    <div className="p-text">
                        <p className="text-text">
                            Lorem ipsum sit admet, consetetur adipisc Pellentesque vel enim a elit elementuma. Aliquam erat volutpat.
                  </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentChoose;