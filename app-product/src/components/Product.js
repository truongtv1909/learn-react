import React, {Component} from 'react';

class Product extends Component{
    render(){
        let {name,price, img } = this.props.product;
        return (
            <div className="product col-4 my-1">
                <div className="card">
                    <img src={img} className="card-img-top" alt="img" style={{
                        height:`400px`
                    }} />
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <h5 className="card-title">{price}</h5>
                        <p className="card-text">{this.props.children}</p>
                        <a href="test" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>    
            </div>
        );
    }

}
export default Product;