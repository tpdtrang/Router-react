import React, { Component } from 'react';
import { HeaderComponent, BannerComponent, ContentChoose, ContentFudi, SliderPerson, CuisinesComponent ,
     CounterComponent,FooterComponent} from '../component';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choose: [
                { id: '1', title: 'GET SOCIAL', icon: './images/icon-chef.png' },
                { id: '2', title: 'GET rewarded', icon: './images/icon-money.png' },
                { id: '3', title: 'GET inspired', icon: './images/icon-eat.png' }
            ],
            slider: [
                { id: '1', image: './images/person.png' },
                { id: '1', image: './images/person.png' },
                { id: '1', image: './images/person.png' }
            ],
            cuisines: [
                { id: '1', image: './images/eat-item-1.png', title: '327 Recipes', name: 'ITALIA' },
                { id: '2', image: './images/eat-item-2.png', title: '856 Recipes', name: 'INDIAN' },
                { id: '3', image: './images/eat-item-3.png', title: '27 Recipes', name: 'FRENCH' },
                { id: '4', image: './images/eat-item-4.png', title: '174 Recipes', name: 'STEAKHOUSE' },
                { id: '5', image: './images/eat-item-5.png', title: '737 Recipes', name: 'SEAFOOD' },
                { id: '6', image: './images/eat-item-6.png', title: '327 Recipes', name: 'SUSHI' },
                { id: '7', image: './images/eat-item-7.png', title: '527 Recipes', name: 'MEXICAN' },
                { id: '8', image: './images/eat-item-8.png', title: '145 Recipes', name: 'CHINESE' },
                { id: '9', image: './images/eat-item-9.png', title: '327 Recipes', name: 'PIZZA' },
                { id: '10', image: './images/eat-item-10.png', title: '1327 Recipes', name: 'AMERICAN' },
            ]
        }
    }
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <BannerComponent></BannerComponent>
                <section className="content-choose-container">
                    <div className="container">
                        <div className="p-page-choose  wow bounceInLeft" data-wow-delay="1s" data-wow-duration="1s">
                            <div className="row">
                                {this.state.choose.map(data => (
                                    <ContentChoose key={data.id} data={data}></ContentChoose>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <ContentFudi></ContentFudi>
                <section className="slider-container">
                    <div className="p-page-slider" id="wrap">
                        {this.state.slider.map(data => (
                            <SliderPerson key={data.id} data={data} ></SliderPerson>
                        ))}

                    </div>
                </section>
                <section className="cuisines-container">
                    <div className="p-cuisines wow slideInRight" data-wow-delay="1s" data-wow-duration="1s">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="p-title-main text-center">
                                        <h3 className="heading-3 dot-bottom">
                                            browse by cuisines</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-img">
                            {this.state.cuisines.map(data => (
                                <CuisinesComponent key={data.id} data={data}></CuisinesComponent>
                            ))}

                        </div>
                    </div>
                </section>
                <CounterComponent></CounterComponent>
                <FooterComponent></FooterComponent>
            </div>
        );
    }
}

export default HomePage;