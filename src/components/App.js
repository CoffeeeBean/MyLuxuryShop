import React, {Component} from 'react';
import ProductOfTheDay from './ProductOfTheDay';

class App extends Component{
    render(){
        return(
            <div>
               <h1> My Luxury Shop</h1>
               <hr/>
               <ProductOfTheDay/>
            </div>
        )
    }
}

export default App;