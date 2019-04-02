import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <header className="header-container" id="p-page-header">
                <div className="container">
                    <div className="p-page-header">
                        <div className="row">
                            <div className="p-logo">
                                <a href="@"><img src="./images/logo.png" alt="Null" /></a>
                            </div>
                            <div className="p-menu">
                                <ul className="menu-content">
                                    <li className="item-menu"><a href="@" className="link-menu">login in</a></li>
                                    <li className="item-menu"><a href="@" className="link-menu">sign up</a></li>
                                    <li className="item-menu"><a href="@" className="link-menu"><i className="fas fa-bars" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default HeaderComponent;