import React, { Component} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Example extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            dropdownOpen: false
        }
        this.toggle = this.toggle.bind(this);
    }

    
    toggle() {
        return this.setState({
            dropdownOpen: ! this.state.dropdownOpen
        });
    }

    SortAZ(){
        console.log('A -> Z');
    }
    render() {
        
    
    return (
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            <DropdownToggle caret color = "primary">
                Sort by
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={this.SortAZ}>A > Z</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Z > A</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
}
}
export default Example;