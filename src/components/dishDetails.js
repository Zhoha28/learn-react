import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';





    //rendering the selected dish
    function RenderDish({dish}) {
        //if not null then
        if (dish != null)
            return(
                <Card>
                {/* then display the deets of selected dish */}
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                      
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }


    //rendering the comments of the selected dish
   function RenderComments({comments}){
        // if not null
      if (comments !=null){
  
          let list = comments.map((comments)=>{

          return(
              <li key={comments.id}>
                  <div>
                      <p>{comments.comment}</p>
                      <p>--{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comments.date)))}</p>
                  </div>
                  </li>
  
          )
          })
          return(
              <div>
                  <h4>Comments</h4>
                  <ul className="list-unstyled">
                      {list}
                  </ul>
              </div>
          )
      }
      else{
          return(
              <div></div>
          )
  
          
      }
  }
 const DishDetail = (props) =>{

   
console.log("dishdetails render is called")
    //storing the props recieved into a variable
    const {dishSelect} = props;
     

    //terenary logic
    //return ? if true :if false
            return dishSelect?(
        <div className="row select-dish">
        <div  className="col-12 col-md-5 m-1">

        {/* renderdish method is called and props stored into the variable is given as an argument*/}
        <RenderDish dish={props.dishSelect} />
     

        </div>
        <div className="col-12 col-md-5 m-1">

        {/* render comments method is called and props stored into the variable is given as an argument (only the comments of the array) */}
        <RenderComments comments={props.dishSelect.comments} />
       
       </div>
   
      </div>
       ):(
        <div></div>
    )
}


export default DishDetail;