import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      txtname:'Hai ha',
      txtpassword:'123123',
      txtDes: 'vo truong',
      chkGender: 0,
      rdLang: 'vn',
      chkbStatus:false
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  onHandleChange(event){
    this.setState({
      [event.target.name]:event.target.type ==='checkbox'? event.target.checked : event.target.value
    });
  }
  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }
  render(){ 
  return (
    <div className="App">
      <div className="container">
        <div className ="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header bg-info text-left">From</div>
              <div className="card-body">
                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group text-left">
                    <label className="float-left">Name</label>
                    <input 
                      type="text" 
                      name="txtname" 
                      className="form-control"
                      value = {this.state.txtname}
                      onChange = {this.onHandleChange}
                    />
                    <label className="float-left">Password</label>
                    <input 
                      type="password" 
                      name="txtpassword" 
                      className="form-control"
                      value = {this.state.txtpassword}
                      onChange = {this.onHandleChange}
                    />

                    <div className="form-group">
                      <label>Description</label>
                      <textarea 
                        className="form-control"
                        value ={this.state.txtDes}
                        onChange = {this.onHandleChange}
                        name="txtDes" />
                    </div>

                    <div className="form-group">
                      <label >Gender</label>
                      <select className="form-control" value={this.state.chkGender} name="chkGender" onChange={this.onHandleChange}>
                        <option value={0}>fmale</option>
                        <option value={1}>male</option>
                      </select>
                    </div>

                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="rdLang"  value="vn" onChange={this.onHandleChange} checked ={this.state.rdLang ==='vn'}/>
                        Vietnam
                      </label>
                    </div>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="radio" className="form-check-input" name="rdLang" value="en" onChange={this.onHandleChange} checked ={this.state.rdLang ==='en'}/>
                        English
                      </label>
                    </div>
                    
                    <div className="form-check">
                      <label className="form-check-label">
                        <input type="checkbox" className="form-check-input" name="chkbStatus" value={this.state.chkbStatus} onChange={this.onHandleChange} checked={this.state.chkbStatus}/>
                          Status
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary mx-1 my-1"> Save </button>
                    <button type="reset" className="btn btn-primary my-1"> Reset </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}

export default App;
