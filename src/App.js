import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import FormPage from './pages/FormPage';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      router:[
        {id:'1', path:'/', component:HomePage, exact:true},
        {id:'2', path:'/form', component:FormPage, exact:false}
        
      ]
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          {this.state.router.map(data => (
            <Route key={data.id} exact={data.exact} path={data.path} component={data.component}></Route>
          ))}
        </Switch>
      </Router>

    );
  }
}

export default App;
