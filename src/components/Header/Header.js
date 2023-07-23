import './Header.css'
import { mycontext } from '../../App';
import { useContext } from 'react';

const Header = () => {
  
    const {cartcount} = useContext(mycontext);
    return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <a class="navbar-brand" href="http://www.google.com">Shoping Spree</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item"><a class="nav-link active" aria-current="page" href="http://www.google.com">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="http://www.google.com">About</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdown" href="http://www.google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="http://www.google.com">All Products</a></li>
                                <li><hr class="dropdown-divider"></hr></li>
                                <li><a class="dropdown-item" href="http://www.google.com">Popular Items</a></li>
                                <li><a class="dropdown-item" href="http://www.google.com">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <button class="btn btn-outline-dark" type="submit">
                            <i class="bi-cart-fill me-1"></i>
                            Cart
                            <span class="badge bg-dark text-white ms-1 rounded-pill">{cartcount}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>
              
    )
};
export default Header;