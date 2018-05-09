import React, {Component} from 'react';
import SearchIcon from 'react-icons/lib/fa/search'

export default class Search extends Component {
    constructor() {
        super()

        this.state = {
            search: []
        };
    }

    inputSearch(search) {
        this.setState({search})
    }


    render() {
        
        return(
            <div>
                <input className='inputSearch' value={this.state.search} onChange={e=>{this.inputSearch(e.target.value)}} placeholder='SEARCH'/><SearchIcon className='searchIcon'/>
                <div>
                    <h6 className='construction'>UNDER CONSTRUCTION</h6>
                    <h6 className='searchText'>Start Typing to Search for Products</h6>
                    
                </div>
            </div>
            
        )
    }
}