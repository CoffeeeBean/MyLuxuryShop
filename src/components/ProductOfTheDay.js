import React, {Component} from 'react';


class ProductOfTheDay extends Component{
    state = {product: {}, showProductDetail: false}

    componentDidMount(){
        fetch('http://localhost:8080/product/200')
        .then(response => response.json()
        .then(json => this.setState({ product: json })));
    }

    toggleDisplayMoreInfo = () => {
        this.setState({ showProductDetail: !this.state.showProductDetail })
    }

    render(){
        
        return(
            <div>
                <h2>Product Of The Day</h2>
                <img src={this.state.product.imageUrl} alt='product of the day' className="productOfTheDay"></img>
                <p>{this.state.product.shortDescription}</p>
                <h3>Product Details</h3>
                {
                    this.state.showProductDetail ? (
                        <div>
                            <p>{this.state.product.editorDescription}</p>
                            <p>{this.state.product.brand}</p>
                            <p>{this.state.product.variant.gender}</p>
                            <p>{this.state.product.unitPrice} - {this.state.product.priceCurrency} </p>
                            <button onClick={this.toggleDisplayMoreInfo}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayMoreInfo}>Read More</button>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default ProductOfTheDay;