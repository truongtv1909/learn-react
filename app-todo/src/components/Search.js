import React,{Component} from 'react';


class Search extends Component  {
render(){
return (  
    <div className="col-6">
        <form>
            <div className="input-group mb-3">
                <input type="text" className="form-control"/>
                <div className="input-group-append">
                    <button className="btn btn-info input-group-text">Search</button>
                </div>
            </div>
        </form>
    </div>
    );
}
}

export default Search;
