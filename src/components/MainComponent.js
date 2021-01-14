
import React, {Component} from 'react';
//importing the components from reactstrap to create the navbar

import Menu from './MenuComponent';
//importing all json files
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import DishDetail from './dishDetails'
import Header from './Header';
import Footer from './FooterComponent'

//object array of dishes stored
import { DISHES } from '../shared/dishes';

import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutUsComponent'
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

    // passing ID from URL of selected dish
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
     
      <div>
        <Header/>
       
        {/* react router to navigate */}
      <Switch>
      <Route path="/home" component={HomePage} />

      <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
      <Route path='/menu/:dishId' component={DishWithId} />

        <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />

        <Route exact path="/ContactUs" component={()=> <ContactUs />} />

        {/* default route */}
        <Redirect to="/home"/>

      </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;