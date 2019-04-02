import React, { Component } from 'react';

class CounterComponent extends Component {
    render() {
        return (
            <section className="counter-container ">
                <div className="container">
                    <div className="row wow fadeInDown" id="counter" data-wow-delay="1s" data-wow-duration="1s">
                        <div className="p-number">
                            <p className="counter-value" data-count={23567}>0</p>
                            <h4 className="heading-4">Recipes Available</h4>
                        </div>
                        <div className="p-number">
                            <p className="counter-value" data-count={431729}>0</p>
                            <h4 className="heading-4">Active Uses</h4>
                        </div>
                        <div className="p-number">
                            <p className="counter-value" data-count={892173}>0</p>
                            <h4 className="heading-4">Positive Review</h4>
                        </div>
                        <div className="p-number">
                            <p className="counter-value" data-count={56581}>0</p>
                            <h4 className="heading-4">Photo &amp; Videos</h4>
                        </div>
                        <div className="p-number">
                            <p className="counter-value" data-count={3182}>0</p>
                            <h4 className="heading-4">Spices and Herbs</h4>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
export default CounterComponent;