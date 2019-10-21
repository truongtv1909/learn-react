import React, { useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Example(props)  {
    let [dropdownOpen, setDrop] = useState(false);
    let [sort, setSort] = useState('name');
    
    const toggle = ()=>{
        return setDrop(!dropdownOpen);
    }

    function SortAZ(name, value) {
        
        // await setSort({
        //     by: name,
        //     value: value
        //     });
        setSort('age');
            
        
    }
    // console.log('asd: ', sort);
    return (
        
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} >
            <DropdownToggle caret color = "primary">
                Sort by
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={()=>SortAZ('age')}>A > Z</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Z > A</DropdownItem>
            </DropdownMenu>
        </ButtonDropdown>
    );
}

export default Example;