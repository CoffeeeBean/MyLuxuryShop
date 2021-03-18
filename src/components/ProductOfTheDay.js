import React, {Component} from 'react';
// import productOfTheDayImg from '../productOfTheDay.g'


class ProductOfTheDay extends Component{
    state = {product: {}}

    componentDidMount(){
        fetch('http://localhost:8080/product/200')
        .then(response => response.json()
        .then(json => this.setState({ product: json })));
    }

    render(){
        
        return(
            <div>
                <h2>Product Of The Day</h2>
                <img src={this.state.product.imageUrl} alt='product of the day' className="productOfTheDay"></img>
                <p>{this.state.product.shortDescription}</p>
            </div>
        )
    }
}

export default ProductOfTheDay;