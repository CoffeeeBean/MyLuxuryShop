import React, {Component} from 'react';
import productOfTheDayImg from '../productOfTheDay.jpg'


class ProductOfTheDay extends Component{
    render(){
        return(
            <div>
                <h2>Product Of The Day</h2>
                <img src={productOfTheDayImg} alt='product of the day'></img>
            </div>
        )
    }
}

export default ProductOfTheDay;