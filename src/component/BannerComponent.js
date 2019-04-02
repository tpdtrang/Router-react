import React, { Component } from 'react';

class BannerComponent extends Component {
    render() {
        return (
            <div>
                <section className="banner-container">
                    <div className="p-page-banner">
                        <img src="./images/background-banner-top.png" alt="Null" width="100%" height="100%" />
                        <div className="p-banner-text text-center">
                            <h5 className="heading-5 wow fadeInDown" data-wow-delay="1s" data-wow-duration="1s">Find your Favorite</h5>
                            <div className="p-title">
                                <h2 className="heading-2 wow fadeInDown" data-wow-delay="1s" data-wow-duration="1s">recipes</h2>
                            </div>
                            <div className="btn-start">
                                <button className="waves-effect waves-light wow fadeInDown" data-wow-delay="1s" data-wow-duration="1s">get started</button>
                            </div>
                            <div className="p-text">
                                <p className="text wow fadeInDown" data-wow-delay="1s" data-wow-duration="1s">or send us your own recipes and <a href="@" className="link-text wow fadeInDown" data-wow-duration="2s">get rewarded!</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default BannerComponent;