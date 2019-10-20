import React, { Component } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false,
            sort: {
                sortBy: 'name',
                sortValue: 1
            }
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    sort = async (name, value) => {
        await this.setState({
            sort: {
                sortBy: name,
                sortValue: value
            }
        });
        this.props.sort(this.state.sort);
    }

    render() {
        let { sort } = this.state
        return (
            <div className="col-6 text-left">
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                    <DropdownToggle caret color="primary">
                        Sort by
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem className={(sort.sortBy === 'name' && sort.sortValue === 1) ? 'bg-info' : ''} onClick={() => this.sort('name', 1)}>
                            Name: a > z
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className={(sort.sortBy === 'name' && sort.sortValue === -1) ? 'bg-info' : ''} onClick={() => this.sort('name', -1)}>
                            Name: z > a
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className={(sort.sortBy === 'status' && sort.sortValue === 1) ? 'bg-info' : ''} onClick={() => this.sort('status', 1)}>
                            Status: success
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem className={(sort.sortBy === 'status' && sort.sortValue === -1) ? 'bg-info' : ''} onClick={() => this.sort('status', -1)}>
                            Status: continue
                        </DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </div>
        );
    }
}
export default Sort;
