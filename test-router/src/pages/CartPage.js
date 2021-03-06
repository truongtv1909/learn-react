import React,{Component} from 'react';
import {CartContext} from '../contexts/Cart';
import Delete from '../components/img/delete.svg'
export default class Cart extends Component{
    render(){
        return(
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Product name</th>

                            <th>Image</th>
                            <th>Quanlity</th>
                            <th>Action</th>
                        </tr>
                        <CartContext.Consumer>
                        {   
                            ({cartItem,decreasePropduct,increaseProduc,deleteCartItem})=>{
                                if(cartItem.length){
                                    return  cartItem.map((item,index)=>(
                                        <tr key={index}>
                                        <td>{item.product.id}</td>
                                        <td>{item.product.name}</td>
                                        <td><img width="40" height="30" src={item.product.image} alt="img"></img></td>
                                        <td className="d-flex">
                                        <button className="btn btn-warning mx-1" onClick={()=>decreasePropduct(item)}>
                                        - </button>{item.quanlity}
                                        <button className="btn btn-warning mx-1" onClick={()=>increaseProduc(item)}> + </button></td>
                                        <td><img alt = "delete" src={Delete} width="30" height="35" onClick={()=>deleteCartItem(item)}></img></td>
                                        </tr>
                                    ))
                                }else{
                                    return <tr><td className="border border-0 text-danger"><h1>Not product in cart!</h1></td></tr>
                                }
                            }
                        }
                        </CartContext.Consumer>
                    </tbody>
                </table>
            </div>
        );
    }
}
