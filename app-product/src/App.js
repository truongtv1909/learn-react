import React,{Component} from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
  constructor(){
    super();
    this.onAddTocart = this.onAddTocart.bind(this);
    this.onGetkey = this.onGetkey.bind(this);
  }
  onClickTest(){
    console.log('click');
  }
  onAddTocart(){
    console.log(this.refs.name.value);
    // console.log(this.onGetkey())
  }
  onGetkey(event){
    // console.log(event.target.value);
    let a = event.target.value;
    console.log(a);
    return a;
  }
render(){
  let products = [
    {
      name:'Iphone 11',
      price:23000000,
      descrip:'Some quick example text to build on the card title', 
      img:'https://tr3.cbsistatic.com/hub/i/r/2019/09/10/036f5f5a-c829-44a0-a443-9fa35ec7fdcd/resize/1200x/05d6c00b1eabde592f0fc09993d9bfe3/iphone11.jpg',
      status: true
    },
    {
      name:'Samsung s10',
      price:20000000,
      descrip:'Some quick example text to build on the card title', 
      img:'https://cdn.fptshop.com.vn/Uploads/Originals/2019/2/21/636863610774110150_ss-galaxy-s10-daidien.png',
      status: true
    },
    {
      name:'Iphone 11',
      price:23000000,
      descrip:'Some quick example text to build on the card title', 
      img:'https://tr3.cbsistatic.com/hub/i/r/2019/09/10/036f5f5a-c829-44a0-a443-9fa35ec7fdcd/resize/1200x/05d6c00b1eabde592f0fc09993d9bfe3/iphone11.jpg',
      status: true
    },
  ];
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-12">
            
            <div className="card">
            <div className="card-header bg-info text-left text-light">
              Add new
            </div>
            <div className="card-body">
            <input className ="form-control" ref="name" onKeyUp={this.onGetkey}></input>
            
            <button className="btn btn-primary float-left my-1" onClick={this.onAddTocart}>Add product</button>
            
            </div>
          </div>
          </div>
        </div>
        <div className="row">
            {products.map((product,index)=> product.status ? <Product key={index} product={product}>{product.descrip}</Product> : '')}
        </div>
        <div className="row">
          <div className="col-12">
            <button className="btn btn-primary float-left" onClick= {this.onClickTest}>Click me</button>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
