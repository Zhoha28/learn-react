//export component from react to create a custom component
import React, {Component} from 'react';
import { Media } from 'reactstrap';

//extends component, meaning that Menu is a component.
// ALWAYS Captialise first letter of name of Component, and the name of the file should be the name of the class
class Menu extends Component{

// constructor contains properties
  constructor(props){
    super(props);

    this.state = {
      dishes: [
          {
            id: 0,
            name:'Uthappizza',
            image: 'assets/images/uthappizza.png',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
         {
            id: 1,
            name:'Zucchipakoda',
            image: 'assets/images/zucchipakoda.png',
            category: 'appetizer',
            label:'',
            price:'1.99',
            description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
         {
            id: 2,
            name:'Vadonut',
            image: 'assets/images/vadonut.png',
            category: 'appetizer',
            label:'New',
            price:'1.99',
            description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
         {
            id: 3,
            name:'ElaiCheese Cake',
            image: 'assets/images/elaicheesecake.png',
            category: 'dessert',
            label:'',
            price:'2.99',
            description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
         ],
  };
}

//render is the function that we use for the class
render(){
  //map function is used to iterate over every dish
  const menu = this.state.dishes.map((dish) => {
    return (
      //every item requires a key to render in react 
      <div key={dish.id} className="col-12 mt-5">
        {/* media from reactstrap is used, media is used to display text and image together */}
          <Media tag="li">
            <Media  left middle>
            <Media object src={dish.image} alt={dish.name} />
            </Media>
            <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>{dish.description}</p>
                  </Media>
          </Media>
      </div>
    );
});



  return(
    <div className="container">
      <div className="row">
        <Media list>
       {/* here you are calling the variable in which you have called the function */}
          {menu}
        </Media>
      </div>
    </div>
  )
}
}

//exporting the default class here. IMP - this should be without round brackets.
export default Menu;