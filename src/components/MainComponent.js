
import React, {Component} from 'react';
//importing the components from reactstrap to create the navbar

import Menu from './MenuComponent';

import DishDetail from './dishDetails'
import Header from './Header';
import Footer from './FooterComponent'
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import About from './AboutUsComponent'
import ContactUs from './ContactComponent';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders,
  }
}
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      

    };
  }




  render() {
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}  />
      )
    }

    // passing ID from URL of selected dish
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    return (
     
      <div>
        <Header/>
       
        {/* react router to navigate */}
      <Switch>
      <Route path="/home" component={HomePage} />

      <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
      <Route path='/menu/:dishId' component={DishWithId} />

        <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />

        <Route exact path="/ContactUs" component={()=> <ContactUs />} />

        {/* default route */}
        <Redirect to="/home"/>

      </Switch>

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));