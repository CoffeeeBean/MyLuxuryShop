import React, {Component} from 'react';
import ProductOfTheDay from './ProductOfTheDay';
import Products from './Products';

class App extends Component{
    render(){
        return(
            <div>
               <h1> My Luxury Shop</h1>
               <hr/>
               <ProductOfTheDay/>
               <hr/>
               <Products/>
            </div>
        )
    }
}

export default App;