import React,{Component} from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state={
            cartItem:[]
        }
        this.addtoCart = this.addtoCart.bind(this);
        this.decreasePropduct = this.decreasePropduct.bind(this);
        this.increaseProduc = this.increaseProduc.bind(this);
    }
    addtoCart(product){
        let index = find(this.state.cartItem,product);
        if(index !== -1){
            this.setState({
                cartItem: [
                    ...this.state.cartItem.slice(0,index),
                    {...this.state.cartItem[index],quanlity:this.state.cartItem[index].quanlity+1},
                    ...this.state.cartItem.slice(index+1)
                ]
            });
        }else{
            this.setState({
                cartItem: this.state.cartItem.concat({
                    product:product,
                    quanlity:1
                })
            });
        }
        function find(cart,product){
            let index = -1;
            if(cart.length>0){
                for(let i =0; i < cart.length; i++){
                    if(cart[i].product.id===product.id){
                        index = i;
                        break;
                    }
                }
            }
            return index;
        }
    }
    increaseProduc(product){
        let {cartItem} = this.state;
        let index = cartItem.indexOf(product);
        this.setState({
            cartItem: [
                ...cartItem.slice(0,index),
                {...cartItem[index],quanlity:cartItem[index].quanlity+1},
                ...cartItem.slice(index+1)
            ]
        });
    }
    decreasePropduct(product){
        console.log(product);
        let {cartItem} = this.state;
        let index = cartItem.indexOf(product);
        this.setState({
            cartItem:[
                ...cartItem.slice(0,index),
                {...cartItem[index],quanlity:cartItem[index].quanlity -1},
                ...cartItem.slice(index+1)
            ]
        });
    }
    render(){
        return(
            
            <CartContext.Provider value={{
                cartItem: this.state.cartItem,
                addtoCart: this.addtoCart,
                increaseProduc: this.increaseProduc,
                decreasePropduct: this.decreasePropduct
            }}>
            {this.props.children}
            </CartContext.Provider>
        );
    }
}