import React,{Component} from 'react';
import {CartContext} from '../contexts/Cart';
export default class Cart extends Component{
    render(){
        return(
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Product name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Quanlity</th>
                        </tr>
                        <CartContext.Consumer>
                        {({cartItem})=>(
                            cartItem.map((item,index)=>(
                                <tr key={index}>
                                <td>{item.product.id}</td>
                                <td>{item.product.name}</td>
                                <td>{item.product.description}</td>
                                <td><img width="40" height="30" src={item.product.image}></img></td>
                                <td>{item.quanlity}</td>
                                </tr>
                            ))
                        )}
                        </CartContext.Consumer>
                    </tbody>
                </table>
            </div>
        );
    }
}
