
import React, {Component} from 'react';
//importing the components from reactstrap to create the navbar

import MenuComponent from './MenuComponent';

//calling dishdetails here
import DishDetail from './dishDetails';
import Header from './Header';
import Footer from './FooterComponent'

//object array of dishes stored
import { DISHES } from '../shared/dishes';

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './AboutUsComponent'
import ContactUs from './ContactUsComponent'
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,

    };
  }
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }


  render() {
    const HomePage = () => {
      return (
        <Home />
      )
    }

    return (
      <div>
        <Header />
      <Switch>
      <Route path="/home" component={HomePage} />

      <Route exact path="/menu" component={() => 
        <MenuComponent dishes={this.state.dishes}
        />} />
        <Route path="/aboutus" component={() => <AboutUs />} />
        <Route path="/ContactUs" component={()=> <ContactUs />} />
        <Redirect to="/home"/>

      </Switch>

        {/* <MenuComponent dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <DishDetail dishSelect={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default Main;