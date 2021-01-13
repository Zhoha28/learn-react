
import React, {Component} from 'react';
//importing the components from reactstrap to create the navbar

import MenuComponent from './MenuComponent';
//importing all json files
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

import Header from './Header';
import Footer from './FooterComponent'

//object array of dishes stored
import { DISHES } from '../shared/dishes';

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutUs from './AboutUsComponent'
import ContactUs from './ContactComponent'
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS

    };
  }
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }


  render() {
    const HomePage = () => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}  />
      )
    }

    return (
     
      <div>
        <Header/>
       
        {/* react router to navigate */}
      <Switch>
      <Route path="/home" component={HomePage} />

      <Route exact path="/menu" component={() => 
        <MenuComponent dishes={this.state.dishes}
        />} />
        <Route path="/aboutus" component={() => <AboutUs />} />
        <Route exact path="/ContactUs" component={()=> <ContactUs />} />
        <Redirect to="/home"/>

      </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;