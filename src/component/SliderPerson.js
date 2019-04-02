import React, { Component } from 'react';

class SliderPerson extends Component {
  render() {
    return (
      <div className="p-slider wow fadeInDown" data-wow-delay="1s" data-wow-duration="1s">
        <div className="caption-item">
          <div className="p-img-person">
            <img className="img-person" src={this.props.data.image} alt="Nul" />
          </div>
          <div className="p-text-person">
            <p className="text-person">"I'm so happy because i found this recipe, and it just made my life
                easier.<br />
              Thanks so much for sharing!"</p>
          </div>
          <div className="p-sp-person">
            <span className="sp-person">-Michael Dawson, San Francisco, CA-</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderPerson;