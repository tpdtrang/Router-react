import React, { Component } from 'react';

class ContentFudi extends Component {
    render() {
        return (
            <section className="content-fudiapp-container">
                <div className="container">
                    <div className="p-page-fudiapp wow bounceInRight" data-wow-delay="1s" data-wow-duration="1s">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="p-image">
                                    <img className="img-content" src="./images/iphone.png"  width="100%" alt="Null" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-text-fudi">
                                    <div className="p-title">
                                        <h3 className="heading-3 dot-bottom left">introducing the fudi app</h3>
                                    </div>
                                    <div className="p-text">
                                        <p className="fudi-text text-1">Morbi eget posuere dolor. Pellentesque cursur aliquet. Aeneanet
                                          felis
                                          sit amet diam mollis ullamcorper. Nullam consequat sem a ante vest ibulum tristique.
                                          Suspendisse
                                          tristique lacus ac mattis porta.
                    </p>
                                        <p className="fudi-text text-2"> Vivamus ligula quam, vehicula non lacinia sed, faucibus sit
                                          amet
                                          libero. In libero dui, eleifend eu nisi id, egestas fringilla odio. In varius quam a mas
                                          sa hendrerit ullamcorper a eu justo. Suspendisse porta mattis convallis. Aenean tempus
                                          ligula
                      ac odio rhoncus, quis aliquam dolor accumsan. </p>
                                        <p className="fudi-text text-3">
                                            Suspendisse aliquet felis consectetur libero congue, sed pulvinar diam malesuada. Duis
                                            vehicula a nibh id hendrerit. Donec
                                            sit amet ultrices ante, a mattis massa.
                    </p>
                                    </div>
                                    <div className="p-app">
                                        <img src="./images/app-store.png"  alt="Null" />
                                        <img src="./images/ch-play.png" alt="Null" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContentFudi;