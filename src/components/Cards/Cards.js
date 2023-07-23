import './Cards.css';
import { useContext } from 'react';
import { mycontext } from '../../App';

const Card = (props) =>
{
    const {cartcount, setCartCount} = useContext(mycontext);

    return(

    <div className="card">
        <div>
        <img className="card-img" src={props.content.image} alt="product"/>
        </div>
          <div className="card-body">
          <h4 className='title'>  {props.content.name}</h4>
          <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star checked"></span>
               <span class="fa fa-star"></span>
               <span class="fa fa-star"></span>
          </div>
          <h6> Price : {props.content.Price} </h6>
          <button className='btn-1' onClick={()=>setCartCount(cartcount + 1)} > ADD TO CART</button>
          <button className='btn-1' onClick={()=>setCartCount(cartcount - 1)} > Remove from CART</button>
     </div>
     </div>
    )
    }

export default Card;