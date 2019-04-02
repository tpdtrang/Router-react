import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
             <footer className="footer-container">
        <div className="container">
          <div className="p-page-footer">
            <div className="row">
              <div className="p-footer-left">
                <h6 className="heading-6">©2014Fudi.All Righ2ts Reserved.</h6>
              </div>
              <div className="p-footer-right">
                <h6 className="heading-6">design by: <span>www.bekades.com</span></h6>
              </div>
            </div>
          </div>
        </div>
      </footer>
        );
    }
}

export default FooterComponent;