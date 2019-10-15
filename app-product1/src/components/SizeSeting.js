import React,{Component} from 'react';
// import './App.css';
// import './row2.css';

class SizeSeting extends Component {
  render(){
  return (
        
        <div className="col-6">
            <div className ="row">
                <div className="col-12">
                <div className="card">
                    <div className="card-header bg-warning text-left">
                    Size: {this.props.fontSize}px
                    </div>
                    <div className="card-body">
                    <div className="row">
                        <div className="col-12 text-left">
                        <button className="btn btn-primary mx-1" onClick ={()=>this.props.inCreaseFont(this.props.fontSize)}>Increase</button>
                        <button className="btn btn-primary mx-1" onClick = {()=>this.props.deCreaseFont(this.props.fontSize)}>Decrease</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="row">
                <div className="col-12 text-left my-1">
                <button className="btn btn-primary" onClick = {this.props.reset}>Reset default</button>
                </div>
            </div>
        </div>       
    );
}
}

export default SizeSeting;
